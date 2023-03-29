document.getElementById("mainWindow").onclick = function() {mainFront()};

function mainFront() {
  document.getElementById("mainWindow").className = "mainWindowFront";
  document.getElementById("mainWindow").classList.remove("mainWindowBack");
  document.getElementById("notesApp").className = "notesAppBack";
  document.getElementById("notesApp").classList.remove("notesAppFront");
}

document.getElementById("notesApp").onclick = function() {appFront()};

function appFront() {
    document.getElementById("notesApp").className = "notesAppFront";
    document.getElementById("notesApp").classList.remove("notesAppBack");
    document.getElementById("mainWindow").className = "mainWindowBack";
    document.getElementById("mainWindow").classList.remove("mainWindowFront");
  }