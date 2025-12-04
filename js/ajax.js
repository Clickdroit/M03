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

      console.log(reponseAL);
    }
  };
  xhttpAL.open("GET", "http://172.20.21.230/api/F163AB8D21/lights/");
  xhttpAL.send();
}
AfficherLumiere();
