// afficher les liens dans le footer vers les différentes pages
let jsp=""
for (let i in SAE) {
    jsp += "<p> <a href='lesprojets.html?number=" + i + "' class='lienfooter'>" + i + "</a></p>"
}
document.querySelector('#link').innerHTML = jsp

document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("header");
  
    window.addEventListener("scroll", function() {
      var scrollPosition = window.scrollY;
  
      if (scrollPosition > 50) {
        header.classList.add("scroll"); 
      } else {
        header.classList.remove("scroll");
      }
    });
});


let persoos = new URLSearchParams(location.search);
let persoss = persoos.get('number');
let doo = persoos.get('domaine');
console.log(persoss)
document.querySelector('#numproj').innerText = persoss 

if(doo == "dessin"){
      document.querySelector("#titreproj").innerHTML = persoss
      document.querySelector("#tt").innerHTML = perso['dessin'][persoss]
      document.querySelector('#projperso').innerHTML = '<img src="../img/dessins/'+persoss+'.jpg" alt="dessin">'
}
if(doo == "photo"){
  document.querySelector("#titreproj").innerHTML = persoss
  document.querySelector("#tt").innerHTML = perso['photo'][persoss]
  document.querySelector('#projperso').innerHTML = '<img src="../img/photos/'+persoss+'.jpg" alt="dessin">'
}
if(doo == "trois"){
  document.querySelector("#titreproj").innerHTML = persoss
  document.querySelector("#tt").innerHTML = perso['TroisD'][persoss]
  document.querySelector('#projperso').innerHTML = '<img src="../img/3D/'+persoss+'.jpg" alt="dessin">'
}

// menu déroulant téléphone

var oui = document.querySelector(".menutel");
var deroulant = document.querySelector(".deroutel")

oui.addEventListener("click", function() {
    if(deroulant.classList.contains('deroutelo')){
      document.querySelector(".deroutel").classList.remove("deroutelo");
      document.querySelector("header").classList.remove("header2");
    }
    else{
      document.querySelector(".deroutel").classList.add("deroutelo");
      document.querySelector("header").classList.add("header2");
    }
  });