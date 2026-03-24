import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzXKP7aGD-lox5DAvM5dc_BFt08GIj9wwiXhF_vkZDXcFed0ly2lUHBoRkEQJnFsVQ/exec";

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
}

export async function POST(request: Request) {
  try {
    const data: RegistrationData = await request.json();

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
      // Don't fail the registration if Google Sheets fails
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
