function ajax(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var reponse=this.responseText;
            console.log(reponse);
        }
    };
    xhttp.open(method, url);
    xhttp.send();
}