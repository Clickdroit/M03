var logoHamburger = document.getElementById("logoHamburger");
var nav = document.getElementById("navigator");
var fermer = document.getElementById('closeNav');
fermer.addEventListener('click', FermerMenu)
logoHamburger.addEventListener('click', AfficherMenu);
document.getElementById('homeNAV').addEventListener('click', AfficherAccueil);


function AfficherMenu(){
    document.getElementById('navigator').style.display='block';
    ajax();
}
function FermerMenu(){
    document.getElementById('navigator').style.display='none';
}
function AfficherAccueil(){
}
function AfficherLumiere(){
    document.getElementById('navigator').style.display='none';
}



//d85e295dccdc11e63077777de976518f API KEY