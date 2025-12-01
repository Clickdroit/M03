function ajax(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var reponse=this.responseText;
            console.log(reponse);
        }
    };
    xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat=48.86&lon=2.33&exclude=hourly,daily&appid=d85e295dccdc11e63077777de976518f");
    xhttp.send();
}
ajax();