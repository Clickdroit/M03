var logoHamburger = document.getElementById("logoHamburger");
var nav = document.getElementById("navigator");
var fermer = document.getElementById('closeNav');
fermer.addEventListener('click', FermerMenu)
logoHamburger.addEventListener('click', AfficherMenu);
document.getElementById('homeNAV').addEventListener('click', AfficherAccueil);
document.getElementById("lumiereNAV").addEventListener('click', AfficherLumiere);
document.getElementById("priseNAV").addEventListener('click', AfficherPrise);
document.getElementById("capteurNAV").addEventListener('click', AfficherCapteur);

function AfficherMenu(){
    document.getElementById('navigator').style.display='block';
    ajax();
}
function FermerMenu(){
    document.getElementById('navigator').style.display='none';
}
function AfficherAccueil(){
    window.location.href = "index.html";
}
// Fonction pour échapper les caractères HTML (protection XSS)
function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function AfficherLumiere(){
    document.getElementById('navigator').style.display='none';
    
    // Créer une variable « section » contenant les informations de l'élément ayant comme identifiant « section »
    var section = document.getElementById('section');
    
    // Initialisation de la variable lumière à une chaine de caractère vide
    var lumiere = '';
    
    // Données simulées pour la démonstration (en production, utiliser AfficherLumiereAPI())
    var lights = [
        { name: "Lumière 1", type: "Extended color light" },
        { name: "Lumière 2", type: "Extended color light" },
        { name: "Prise 1", type: "On/Off plug-in unit" },
        { name: "Lumière 3", type: "Color light" }
    ];
    
    // Boucle sur les différents éléments
    for (var i = 0; i < lights.length; i++) {
        var element = lights[i];
        
        // Condition pour ne visualiser que les lumières (type contient "light")
        if (element.type && element.type.toLowerCase().includes('light')) {
            // Compléter la variable « lumiere » avec la structure HTML
            lumiere = lumiere + '<div class="lumiere-item"><img src="./images/lightbulb.png" alt="lumiere"><span>' + escapeHtml(element.name) + '</span><button id="on_' + i + '">ON</button><button id="off_' + i + '">OFF</button></div>';
        }
    }
    
    // Afficher le contenu de la variable « lumiere » dans l'identifiant section
    section.innerHTML = lumiere;
}
function AfficherPrise(){
    window.location.href = "prise.html";
}
function AfficherCapteur(){
    window.location.href = "capteur.html";
}



//d85e295dccdc11e63077777de976518f API KEY