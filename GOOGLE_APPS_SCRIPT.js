/**
 * ecom-hub Registration Handler
 *
 * After pasting, redeploy as New Version
 */

const SHEET_ID = "1Z33nBlt7WVmz9SEnK3uVPjKj8OtDwiYNwoH2VtcP7bI";
const SHEET_NAME = "ecom-hubRegistrations";

function doGet(e) {
  // Handle case when e is undefined (direct function call)
  if (!e || !e.parameter) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "OK", message: "ecom-hub registration endpoint" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  // Check if this is a data submission
  if (e.parameter.data) {
    try {
      const data = JSON.parse(e.parameter.data);
      saveToSheet(data);
      return ContentService
        .createTextOutput(JSON.stringify({ success: true }))
        .setMimeType(ContentService.MimeType.JSON);
    } catch (error) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }

  return ContentService
    .createTextOutput(JSON.stringify({ status: "OK", message: "ecom-hub registration endpoint" }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    saveToSheet(data);
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function saveToSheet(data) {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow([
      "Timestamp", "Name", "Email", "Phone", "Brand Name",
      "Product Category", "Marketplaces", "Services",
      "Documents", "Additional Notes", "Payment ID", "Amount"
    ]);
  }

  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.name || "",
    data.email || "",
    data.phone || "",
    data.brandName || "",
    data.productCategory || "",
    data.marketplaces || "",
    data.services || "",
    data.documents || "",
    data.additionalNotes || "",
    data.paymentId || "",
    data.amount || 51
  ]);
}
