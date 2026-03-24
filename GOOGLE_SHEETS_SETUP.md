# Google Sheets Integration Setup

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "ecom-hub Registrations"
4. In Row 1, add these headers:
   - A1: Timestamp
   - B1: Name
   - C1: Email
   - D1: Phone
   - E1: Brand Name
   - F1: Marketplaces
   - G1: Services
   - H1: Documents
   - I1: Payment ID
   - J1: Order ID

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    if (data.action === "register") {
      const rowData = [
        data.data.timestamp || new Date().toISOString(),
        data.data.name || "",
        data.data.email || "",
        data.data.phone || "",
        data.data.brandName || "",
        data.data.marketplaces || "",
        data.data.services || "",
        data.data.documents || "",
        data.data.paymentId || "",
        data.data.orderId || ""
      ];

      sheet.appendRow(rowData);

      // Send email notification (optional)
      const emailTo = "mohitraipr@gmail.com";
      const subject = "New ecom-hub Registration: " + data.data.name;
      const body = `
New registration received!

Name: ${data.data.name}
Email: ${data.data.email}
Phone: ${data.data.phone}
Brand: ${data.data.brandName}
Marketplaces: ${data.data.marketplaces}
Services: ${data.data.services}
Documents: ${data.data.documents}
Payment ID: ${data.data.paymentId}
Order ID: ${data.data.orderId}
Timestamp: ${data.data.timestamp}
      `;

      MailApp.sendEmail(emailTo, subject, body);

      return ContentService
        .createTextOutput(JSON.stringify({ success: true }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ error: "Unknown action" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function
function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        action: "register",
        data: {
          timestamp: new Date().toISOString(),
          name: "Test User",
          email: "test@example.com",
          phone: "9876543210",
          brandName: "Test Brand",
          marketplaces: "Amazon, Flipkart",
          services: "Onboarding, Operations",
          documents: "GST, PAN",
          paymentId: "test_payment_123",
          orderId: "test_order_123"
        }
      })
    }
  };

  const result = doPost(testData);
  Logger.log(result.getContent());
}
```

4. Save the project (Ctrl+S or Cmd+S)
5. Name it "ecom-hub Registration Handler"

## Step 3: Deploy as Web App

1. Click **Deploy > New deployment**
2. Click the gear icon next to "Select type" and choose **Web app**
3. Set:
   - Description: "ecom-hub Registration Handler"
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**
5. Click **Authorize access** and allow permissions
6. Copy the **Web app URL** (looks like: `https://script.google.com/macros/s/xxx.../exec`)

## Step 4: Add URL to Environment Variables

Add to your `.env.local` file:

```
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

## Step 5: Test

1. Run `npm run dev`
2. Go to `/register`
3. Fill out the form and pay
4. Check your Google Sheet - new row should appear
5. Check your email for notification

## Troubleshooting

**Data not appearing in sheet:**
- Make sure the Web app URL is correct in `.env.local`
- Check the Apps Script execution logs (View > Executions)
- Verify "Anyone" has access to the web app

**Email not sending:**
- First deployment may require Gmail permission - reauthorize if needed
- Check spam folder

**CORS errors:**
- Apps Script handles CORS automatically for POST requests
- If issues persist, the web app may need to be redeployed
