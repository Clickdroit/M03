function ajax() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var reponse = this.responseText;
      var reponseMeteo = JSON.parse(reponse);

      var temp = reponseMeteo.main.temp + " °C";
      document.getElementById("temperature").innerHTML = temp;
      var ville = "Ville: " + reponseMeteo.name;
      document.getElementById("ville_meteo").innerHTML = ville;
      var icone = reponseMeteo.weather[0].icon;
      document.getElementById("icone_meteo").src =
        "https://openweathermap.org/img/wn/" + icone + "@2x.png";

      console.log(icone);
      console.log(temp);
      console.log(ville);
    }
  };
  xhttp.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/weather?units=metric&lat=48.8575&lon=2.3514&exclude=hourly,daily&appid=d85e295dccdc11e63077777de976518f"
  );
  xhttp.send();
}
ajax();

// Fonction pour échapper les caractères HTML (protection XSS)
function escapeHtml(text) {
  var div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function AfficherLumiereAPI() {
  // Créer une variable « section » contenant les informations de l'élément ayant comme identifiant « section »
  var section = document.getElementById('section');
  
  // Initialisation de la variable lumière à une chaine de caractère vide
  var lumiere = '';

  const xhttpAL = new XMLHttpRequest();
  xhttpAL.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var reponseAL = this.responseText;
      var data = JSON.parse(reponseAL);
      
      console.log(reponseAL);
      
      // Boucle sur les différents éléments
      for (var key in data) {
        var element = data[key];
        
        // Condition pour ne visualiser que les lumières (type contient "light" ou "Light")
        if (element.type && element.type.toLowerCase().includes('light')) {
          // Compléter la variable « lumiere » avec la structure HTML
          lumiere = lumiere + '<div class="lumiere-item"><img src="./images/lightbulb.png" alt="lumiere"><span>' + escapeHtml(element.name) + '</span><button id="on_' + key + '">ON</button><button id="off_' + key + '">OFF</button></div>';
        }
      }
      
      // Afficher le contenu de la variable « lumiere » dans l'identifiant section
      section.innerHTML = lumiere;
    }
  };
  xhttpAL.open("GET", "http://172.20.21.230/api/F163AB8D21/lights/");
  xhttpAL.send();
}
