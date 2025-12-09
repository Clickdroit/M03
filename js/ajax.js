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

function AfficherLumiere() {
  const xhttpAL = new XMLHttpRequest();
  xhttpAL.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var reponseAL = this.responseText;
      var lumieres = JSON.parse(reponseAL);

      console.log(reponseAL);
      var section = document.getElementById("section");
      section.innerHTML = "";
      var lumiere = '';
      for (var num in lumieres) {
        var item = lumieres[num];
        let type = item.type;
        let etat = item.state.on;
        let uniqueid = item.uniqueid;
        console.log("ID: " + num + " Type: " + type + " Etat: " + etat + " UniqueID: " + uniqueid);
        if (item.type && item.type.toLowerCase().includes("light")) {
          lumiere = lumiere + '<div class="lumiere-card">';
          lumiere = lumiere + "<h3>" + item.name + "</h3>";
          lumiere =lumiere + '<img src="images/lightbulb.png" alt="lumiere">';
          lumiere =lumiere + '<button class="btn-on" id="'+uniqueid+'">ON</button>';           
          lumiere =lumiere +'<button class="btn-off" id="'+uniqueid+'">OFF</button>';
          lumiere = lumiere + "</div>";
        }
      }
      section.innerHTML = lumiere;
    }
  };
  xhttpAL.open("GET", "http://172.20.21.230/api/F163AB8D21/lights/");
  xhttpAL.send();
}
if (window.location.pathname.includes("lumiere.html")) {
  AfficherLumiere();
}
