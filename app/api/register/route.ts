import { NextResponse } from "next/server";
import { createHash } from "crypto";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzXKP7aGD-lox5DAvM5dc_BFt08GIj9wwiXhF_vkZDXcFed0ly2lUHBoRkEQJnFsVQ/exec";

// Meta Conversions API
const META_PIXEL_ID = process.env.META_PIXEL_ID || "1948156189395176";
const META_ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;
const META_API_VERSION = "v18.0";

interface RegistrationData {
  name: string;
  email: string;
  phone: string;
  brandName: string;
  productCategory?: string;
  selectedMarketplaces: string[];
  selectedServices: string[];
  availableDocuments: string[];
  additionalNotes?: string;
  paymentId: string;
  amount: number;
  timestamp: string;
  fbc?: string; // Facebook click ID
  fbp?: string; // Facebook browser ID
  userAgent?: string;
  clientIp?: string;
}

// Hash function for Meta (SHA256, lowercase)
function hashForMeta(value: string): string {
  return createHash("sha256")
    .update(value.toLowerCase().trim())
    .digest("hex");
}

// Format phone for Meta (remove spaces, add country code)
function formatPhone(phone: string): string {
  let cleaned = phone.replace(/\D/g, "");
  if (!cleaned.startsWith("91") && cleaned.length === 10) {
    cleaned = "91" + cleaned;
  }
  return cleaned;
}

// Send event to Meta Conversions API
async function sendMetaEvent(data: RegistrationData) {
  if (!META_ACCESS_TOKEN) {
    console.log("Meta Access Token not configured, skipping Conversions API");
    return;
  }

  const eventTime = Math.floor(Date.now() / 1000);
  const eventId = `reg_${data.paymentId}_${eventTime}`;

  // Get first name from full name
  const firstName = data.name.split(" ")[0];

  const payload = {
    data: [
      {
        event_name: "CompleteRegistration",
        event_time: eventTime,
        event_id: eventId,
        action_source: "website",
        event_source_url: "https://ecom-hub.in/register",
        user_data: {
          em: [hashForMeta(data.email)],
          ph: [hashForMeta(formatPhone(data.phone))],
          fn: [hashForMeta(firstName)],
          client_ip_address: data.clientIp || undefined,
          client_user_agent: data.userAgent || undefined,
          fbc: data.fbc || undefined,
          fbp: data.fbp || undefined,
        },
        custom_data: {
          currency: "INR",
          value: data.amount || 51,
          content_name: "ecom-hub Registration",
          status: "completed",
        },
      },
    ],
  };

  try {
    const url = `https://graph.facebook.com/${META_API_VERSION}/${META_PIXEL_ID}/events?access_token=${META_ACCESS_TOKEN}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    console.log("Meta Conversions API response:", result);
    return result;
  } catch (error) {
    console.error("Meta Conversions API error:", error);
  }
}

export async function POST(request: Request) {
  try {
    const data: RegistrationData = await request.json();

    // Get client info from headers
    const headers = request.headers;
    data.userAgent = headers.get("user-agent") || undefined;
    data.clientIp = headers.get("x-forwarded-for")?.split(",")[0] ||
                    headers.get("x-real-ip") ||
                    undefined;

    // Add timestamp if not present
    if (!data.timestamp) {
      data.timestamp = new Date().toISOString();
    }

    console.log("New Registration:", data);

    // Send to Google Sheets
    try {
      const payload = {
        timestamp: data.timestamp,
        name: data.name,
        email: data.email,
        phone: data.phone,
        brandName: data.brandName,
        productCategory: data.productCategory || "",
        marketplaces: Array.isArray(data.selectedMarketplaces)
          ? data.selectedMarketplaces.join(", ")
          : data.selectedMarketplaces || "",
        services: Array.isArray(data.selectedServices)
          ? data.selectedServices.join(", ")
          : data.selectedServices || "",
        documents: Array.isArray(data.availableDocuments)
          ? data.availableDocuments.join(", ")
          : data.availableDocuments || "",
        additionalNotes: data.additionalNotes || "",
        paymentId: data.paymentId || "N/A",
        amount: data.amount || 51,
      };

      console.log("Sending to Google Sheets:", payload);

      // Use GET with query params (more reliable with Apps Script)
      const params = new URLSearchParams();
      params.append("data", JSON.stringify(payload));

      const response = await fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, {
        method: "GET",
        redirect: "follow",
      });

      const result = await response.text();
      console.log("Google Sheets response:", result);
    } catch (sheetError) {
      console.error("Failed to save to Google Sheets:", sheetError);
    }

    // Send to Meta Conversions API
    try {
      await sendMetaEvent(data);
    } catch (metaError) {
      console.error("Failed to send to Meta:", metaError);
    }

    return NextResponse.json({
      success: true,
      message: "Registration successful"
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Failed to save registration" },
      { status: 500 }
    );
  }
}
