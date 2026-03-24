"use client";

import { useState } from "react";
import Script from "next/script";

const RAZORPAY_KEY = "rzp_live_STz09YdMiRK6w2";
const AMOUNT = 51 * 100; // ₹51 in paise

const marketplaces = [
  { id: "flipkart", name: "Flipkart", time: "7 Days" },
  { id: "myntra", name: "Myntra", time: "7-15 Days" },
  { id: "amazon", name: "Amazon", time: "7-15 Days" },
  { id: "nykaa", name: "Nykaa", time: "1 Month" },
  { id: "ajio", name: "Ajio", time: "7-15 Days" },
  { id: "meesho", name: "Meesho", time: "3-5 Days" },
  { id: "shopsy", name: "Shopsy", time: "3-5 Days" },
  { id: "shopify", name: "Shopify Website", time: "1 Day" },
  { id: "oms", name: "OMS Integration", time: "7 Days" },
];

const documents = [
  { id: "aadhaar", name: "Aadhaar Card", required: true },
  { id: "pan", name: "PAN Card", required: true },
  { id: "gst", name: "GST Number", required: true },
  { id: "trademark", name: "Trademark Certificate", required: false },
  { id: "fssai", name: "FSSAI (Food Items)", required: false },
  { id: "current_account", name: "Current Account", required: true },
  { id: "letterhead", name: "Company Letterhead", required: false },
  { id: "stamp", name: "Company Stamp", required: false },
  { id: "cancelled_cheque", name: "Cancelled Cheque", required: true },
];

const services = [
  { id: "onboarding", name: "Marketplace Onboarding" },
  { id: "catalog", name: "Catalog Management" },
  { id: "inventory", name: "Inventory Sync" },
  { id: "orders", name: "Order Management" },
  { id: "returns", name: "Returns Processing" },
  { id: "ads", name: "Ads & Marketing" },
  { id: "sourcing", name: "Product Sourcing" },
];

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    brandName: "",
    productCategory: "",
    selectedMarketplaces: [] as string[],
    selectedServices: [] as string[],
    availableDocuments: [] as string[],
    additionalNotes: "",
  });

  const updateField = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleArrayItem = (field: string, item: string) => {
    setFormData((prev) => {
      const arr = prev[field as keyof typeof prev] as string[];
      if (arr.includes(item)) {
        return { ...prev, [field]: arr.filter((i) => i !== item) };
      } else {
        return { ...prev, [field]: [...arr, item] };
      }
    });
  };

  const handlePayment = async () => {
    setIsProcessing(true);

    const options = {
      key: RAZORPAY_KEY,
      amount: AMOUNT,
      currency: "INR",
      name: "ecom-hub",
      description: "Registration Fee - Onboarding to 21 Sales",
      handler: async function (response: any) {
        // Payment successful
        const paymentData = {
          ...formData,
          paymentId: response.razorpay_payment_id,
          amount: 51,
          timestamp: new Date().toISOString(),
        };

        // Send to Google Sheets via webhook
        try {
          await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(paymentData),
          });
        } catch (e) {
          console.log("Webhook error", e);
        }

        setIsSuccess(true);
        setIsProcessing(false);
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      theme: {
        color: "#2563eb",
      },
      modal: {
        ondismiss: function () {
          setIsProcessing(false);
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.name && formData.phone && formData.email && formData.brandName;
      case 2:
        return formData.selectedMarketplaces.length > 0;
      case 3:
        return formData.selectedServices.length > 0;
      case 4:
        return formData.availableDocuments.length > 0;
      default:
        return true;
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Registration Successful!</h1>
          <p className="text-gray-400 mb-8">
            Thank you for registering with ecom-hub. Our team will contact you within 24 hours to begin your onboarding journey.
          </p>
          <a
            href="https://wa.me/917979026089?text=Hi%2C%20I%20just%20completed%20my%20registration%20for%20ecom-hub"
            target="_blank"
            className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Message us on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      <div className="min-h-screen bg-gray-900">
        {/* Header */}
        <header className="border-b border-gray-800 px-6 py-4">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            <div className="text-xl font-bold text-white">
              ecom<span className="text-blue-400">-</span>hub
            </div>
            <div className="text-sm text-gray-400">
              Step {step} of 5
            </div>
          </div>
        </header>

        {/* Progress Bar */}
        <div className="max-w-3xl mx-auto px-6 pt-6">
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <div
                key={s}
                className={`h-2 flex-1 rounded-full transition-colors ${
                  s <= step ? "bg-blue-500" : "bg-gray-700"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="max-w-3xl mx-auto px-6 py-12">
          {/* Step 1: Basic Info */}
          {step === 1 && (
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Let&apos;s get started</h1>
              <p className="text-gray-400 mb-8">Tell us about yourself and your brand</p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Brand Name *</label>
                  <input
                    type="text"
                    value={formData.brandName}
                    onChange={(e) => updateField("brandName", e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Enter your brand name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Product Category</label>
                  <input
                    type="text"
                    value={formData.productCategory}
                    onChange={(e) => updateField("productCategory", e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="e.g., Fashion, Electronics, Beauty"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Marketplace Selection */}
          {step === 2 && (
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Select Marketplaces</h1>
              <p className="text-gray-400 mb-8">Choose where you want to sell your products</p>

              <div className="grid sm:grid-cols-2 gap-4">
                {marketplaces.map((mp) => (
                  <label
                    key={mp.id}
                    className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                      formData.selectedMarketplaces.includes(mp.id)
                        ? "bg-blue-500/20 border-blue-500"
                        : "bg-gray-800 border-gray-700 hover:border-gray-600"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={formData.selectedMarketplaces.includes(mp.id)}
                        onChange={() => toggleArrayItem("selectedMarketplaces", mp.id)}
                        className="w-5 h-5 rounded border-gray-600 text-blue-500 focus:ring-blue-500 focus:ring-offset-0 bg-gray-700"
                      />
                      <span className="text-white font-medium">{mp.name}</span>
                    </div>
                    <span className="text-sm text-gray-400">{mp.time}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Services */}
          {step === 3 && (
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Select Services</h1>
              <p className="text-gray-400 mb-8">What do you need help with?</p>

              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((service) => (
                  <label
                    key={service.id}
                    className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      formData.selectedServices.includes(service.id)
                        ? "bg-blue-500/20 border-blue-500"
                        : "bg-gray-800 border-gray-700 hover:border-gray-600"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.selectedServices.includes(service.id)}
                      onChange={() => toggleArrayItem("selectedServices", service.id)}
                      className="w-5 h-5 rounded border-gray-600 text-blue-500 focus:ring-blue-500 focus:ring-offset-0 bg-gray-700"
                    />
                    <span className="text-white font-medium">{service.name}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Documents */}
          {step === 4 && (
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Available Documents</h1>
              <p className="text-gray-400 mb-8">Select the documents you currently have ready</p>

              <div className="space-y-3">
                {documents.map((doc) => (
                  <label
                    key={doc.id}
                    className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                      formData.availableDocuments.includes(doc.id)
                        ? "bg-blue-500/20 border-blue-500"
                        : "bg-gray-800 border-gray-700 hover:border-gray-600"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={formData.availableDocuments.includes(doc.id)}
                        onChange={() => toggleArrayItem("availableDocuments", doc.id)}
                        className="w-5 h-5 rounded border-gray-600 text-blue-500 focus:ring-blue-500 focus:ring-offset-0 bg-gray-700"
                      />
                      <span className="text-white font-medium">{doc.name}</span>
                    </div>
                    {doc.required && (
                      <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">Required</span>
                    )}
                  </label>
                ))}
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">Additional Notes (Optional)</label>
                <textarea
                  value={formData.additionalNotes}
                  onChange={(e) => updateField("additionalNotes", e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  rows={3}
                  placeholder="Any specific requirements or questions?"
                />
              </div>
            </div>
          )}

          {/* Step 5: Payment */}
          {step === 5 && (
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Complete Registration</h1>
              <p className="text-gray-400 mb-8">Pay ₹51 registration fee to start your onboarding</p>

              {/* Summary */}
              <div className="bg-gray-800 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Registration Summary</h3>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Name</span>
                    <span className="text-white">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Brand</span>
                    <span className="text-white">{formData.brandName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Marketplaces</span>
                    <span className="text-white">{formData.selectedMarketplaces.length} selected</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Services</span>
                    <span className="text-white">{formData.selectedServices.length} selected</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Documents Ready</span>
                    <span className="text-white">{formData.availableDocuments.length} of {documents.length}</span>
                  </div>
                </div>

                <div className="border-t border-gray-700 mt-4 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Registration Fee</span>
                    <span className="text-2xl font-bold text-white">₹51</span>
                  </div>
                </div>
              </div>

              {/* What you get */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-green-400 mb-3">What you get:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Complete marketplace onboarding
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Support until your first 21 sales
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Dedicated WhatsApp support
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Catalog & listing assistance
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex-1 px-6 py-4 border border-gray-700 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                Back
              </button>
            )}

            {step < 5 ? (
              <button
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                className={`flex-1 px-6 py-4 font-semibold rounded-xl transition-colors ${
                  canProceed()
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-500 cursor-not-allowed"
                }`}
              >
                Continue
              </button>
            ) : (
              <button
                onClick={handlePayment}
                disabled={isProcessing}
                className="flex-1 px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>Pay ₹51 &amp; Register</>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
