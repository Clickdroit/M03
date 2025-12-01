var footer = document.getElementById("footer");
footer.addEventListener('mouseover', mon_popup);
function mon_popup(){
    alert("Gestion de l'événement 'mouse over' sur mon footer");
}
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