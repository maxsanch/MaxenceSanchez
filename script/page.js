let bonneSAE = new URLSearchParams(location.search);
let LaSAE = bonneSAE.get('projet');
let dom = bonneSAE.get('domaine');

console.log(dom)
console.log(LaSAE)

document.querySelector('.centrage>h1').innerHTML= SAE[dom][LaSAE]['titre']

document.querySelector('.illus2').innerHTML= '<img src="../img/imagesprojets/'+dom+'/'+LaSAE+' 1.png" alt="illustration_projet">'
document.querySelector('.txt').innerHTML = SAE[dom][LaSAE]['description']


document.querySelector('#deux').innerHTML= '<img src="../img/imagesprojets/'+dom+'/'+LaSAE+' 3.png" alt="illustration_projet">'
document.querySelector('#txtdeux').innerHTML = SAE[dom][LaSAE]['étapes']


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

  // menu déroulant téléphone

var oui = document.querySelector(".menutel");
var deroulant = document.querySelector(".deroutel")

oui.addEventListener("click", function() {
  header.classList.toggle("header2")
    if(deroulant.classList.contains('deroutelo')){
      deroulant.classList.remove("deroutelo");
    }
    else{
      deroulant.classList.add("deroutelo");
    }
  });