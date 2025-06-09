# Sin Desire Profiler - Setup Guide

## ✅ Current Status
- [x] Quiz functionality working
- [x] Desire breakdown percentages working  
- [x] PDF download working
- [x] Environment variables configured
- [x] Location detection ready
- [x] Enhanced data collection ready

## 🔥 Firebase Setup

### 1. Check Firebase Status
Your Firebase config is already set up in `.env`. The app will show:
- ✅ **Development mode**: "Firebase not initialized. Skipping database save for development."
- ✅ **Production mode**: Will save to Firebase automatically

### 2. Test Firebase Connection
When you submit the quiz form, check the browser console for:
```
Document written with ID: [some-id]
Email lead saved with ID: [some-id]
```

If you see "Firebase not initialized" - it's working correctly in dev mode!

## 📊 Google Apps Script Setup

### 1. Create New Google Apps Script
1. Go to [script.google.com](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the contents of `google-apps-script-webhook.js`

### 2. Configure Spreadsheet
1. Create a new Google Sheet
2. Copy the spreadsheet ID from the URL: 
   `https://docs.google.com/spreadsheets/d/[SPREADSHEET_ID]/edit`
3. Replace `YOUR_SPREADSHEET_ID_HERE` in the script with your actual ID

### 3. Deploy as Web App
1. Click "Deploy" → "New deployment"
2. Choose "Web app" as type
3. Set execution as "Me"
4. Set access to "Anyone"
5. Click "Deploy"
6. Copy the web app URL

### 4. Update Your App
Replace the current webhook URL in `src/app/capture/page.tsx` with your new URL.

## 🌍 Location Detection

### Current Status: ✅ Ready
- Environment variable: `NEXT_PUBLIC_IPINFO_API_KEY=93a142f1a33e19`
- API integration: Complete
- Data collection: Ready

## 📋 Data Being Collected

The following data is now sent to both Firebase and Google Sheets:

### Google Sheets Columns:
1. **Timestamp** - When the data was received
2. **Email** - User's email address  
3. **Name** - User's first name
4. **Gender** - User's selected gender
5. **Age** - User's age
6. **Desire (Sin)** - Dominant sin result (e.g., "gluttony")
7. **Subtype** - Specific subtype (e.g., "comfort_craver")
8. **Location** - City, Region, Country (via IP detection)
9. **Submission Date** - Original form submission timestamp

### Firebase Document:
- All the above fields plus:
- `sinScores` - All 7 sin scores
- `subtypeScores` - Detailed subtype scores
- `answers` - Raw quiz answers array

## 🧪 Testing

### 1. Test Location Detection
Check browser console for:
```
IP info API key available: true
Location detected: [City, Region, Country]
```

### 2. Test Google Sheets Integration
Check console for:
```
Sending data to Google Sheets: {email, name, gender, age, desire, subtype, timestamp, location}
```

### 3. Test Firebase
In production, check for:
```
Document written with ID: [firebase-doc-id]
```

## 🚀 Going Live

### 1. Deploy to Production
Your Firebase will automatically start working in production mode.

### 2. Update Environment Variables
Make sure your hosting platform has all the environment variables from `.env`.

### 3. Monitor
- Check Google Sheets for incoming data
- Check Firebase console for database entries
- Monitor browser console for any errors

## 🔧 Troubleshooting

### Firebase Not Saving
- Check console for "Firebase not initialized" (normal in dev)
- Verify all environment variables are set
- Check Firebase project permissions

### Location Not Working  
- Verify `NEXT_PUBLIC_IPINFO_API_KEY` in `.env`
- Check console for "IP info API key available: true"
- Check for CORS or network issues

### Google Sheets Not Receiving Data
- Verify webhook URL is correct
- Check Google Apps Script logs
- Ensure spreadsheet permissions are correct
- Make sure the script is deployed as "Web app"

## ✨ Features Summary

- ✅ Complete quiz with result calculation
- ✅ Desire breakdown with percentages  
- ✅ PDF download with all sections
- ✅ Location detection via IP
- ✅ Firebase database storage
- ✅ Google Sheets webhook integration
- ✅ Email capture and lead generation
- ✅ Full data analytics ready 