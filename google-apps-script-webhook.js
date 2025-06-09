function doPost(e) {
  try {
    // Log the incoming request for debugging
    console.log('Received POST request:', e.postData.contents);
    
    // Parse the JSON data
    const data = JSON.parse(e.postData.contents);
    console.log('Parsed data:', data);
    
    // Open the spreadsheet - REPLACE WITH YOUR ACTUAL SPREADSHEET ID
    const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE'; // Replace this with your actual Google Sheets ID
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    
    // Get or create the "Quiz Results" sheet
    let sheet = spreadsheet.getSheetByName('Quiz Results');
    if (!sheet) {
      sheet = spreadsheet.insertSheet('Quiz Results');
      
      // Add headers if this is a new sheet
      const headers = [
        'Timestamp',
        'Email', 
        'Name',
        'Gender',
        'Age',
        'Desire (Sin)',
        'Subtype',
        'Location',
        'Submission Date'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Format the header row
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('white');
    }
    
    // Prepare the row data
    const rowData = [
      new Date(), // Current timestamp
      data.email || '',
      data.name || '',
      data.gender || '',
      data.age || '',
      data.desire || '',
      data.subtype || '',
      data.location || '',
      data.timestamp || ''
    ];
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    
    // Log success
    console.log('Data successfully added to spreadsheet');
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Data saved successfully',
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log the error
    console.error('Error processing webhook:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString(),
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle GET requests (for testing)
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Sin Desire Profiler webhook is running',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
} 