function doGet(e) {
  return ContentService.createTextOutput("Hello World");
}

// Enregistrer une nouvelle réservation
function ajouterReservation(date, nom, email) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reservations");
  var data = sheet.getDataRange().getValues();
  
  // Vérifier si la date est déjà réservée
  for (var i = 1; i < data.length; i++) {
    if (data[i][0] == date) {
      return "Cette date est déjà réservée.";
    }
  }

  // Ajouter la nouvelle réservation
  sheet.appendRow([date, nom, email]);
  return "Réservation confirmée !";
}

// Obtenir les dates réservées
function getReservations() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reservations");
  var data = sheet.getDataRange().getValues();
  var reservations = [];

  for (var i = 1; i < data.length; i++) {
    reservations.push(data[i][0]);
  }

  return reservations;
}
