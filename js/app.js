var logoHamburger = document.getElementById("logoHamburger");
var nav = document.getElementById("navigator");
var fermer = document.getElementById("closeNav");
fermer.addEventListener("click", FermerMenu);
logoHamburger.addEventListener("click", AfficherMenu);
document.getElementById("homeNAV").addEventListener("click", AfficherAccueil);
document
  .getElementById("lumiereNAV")
  .addEventListener("click", AfficherLumiere);
document.getElementById("priseNAV").addEventListener("click", AfficherPrise);
document
  .getElementById("capteurNAV")
  .addEventListener("click", AfficherCapteur);

function AfficherMenu() {
  document.getElementById("navigator").style.display = "block";
  ajax();
}
function FermerMenu() {
  document.getElementById("navigator").style.display = "none";
}
function AfficherAccueil() {
  window.location.href = "index.html";
}
function AfficherLumiere() {
  window.location.href = "lumiere.html";
  document.getElementById("navigator").style.display = "none";
  var section = document.getElementById("section");
  section.innerHTML = "";
  var lumiere = "";
  lumiere =
    lumiere +
    '<img src="images/lightbulb.png" alt="lumiere"><button id="on">ON</button><button id="off">OFF</button>';
  section.innerHTML = lumiere;
}
function AfficherPrise() {
  window.location.href = "prise.html";
}
function AfficherCapteur() {
  window.location.href = "capteur.html";
}

//d85e295dccdc11e63077777de976518f API KEY
