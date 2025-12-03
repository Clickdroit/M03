var logoHamburger = document.getElementById("logoHamburger");
var nav = document.getElementById("navigator");
var fermer = document.getElementById('close');
fermer.addEventListener('click', FermerMenu)
logoHamburger.addEventListener('click', AfficherMenu);

function AfficherMenu(){
    document.getElementById('navigator').style.display='block';
}
function FermerMenu(){
    document.getElementById('navigator').style.display='none';
}


//d85e295dccdc11e63077777de976518f API KEY