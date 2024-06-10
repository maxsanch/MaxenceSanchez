setInterval(changer, 1000);

let i = 1

document.querySelector('.competence:nth-child(1)').style = "display:block"

function changer() {
    document.querySelector('.competence:nth-child(' + i + ')').style = "display:none"
    i = i + 1
    console.log(i)
    document.querySelector('.competence:nth-child(' + i + ')').style = "display:block"
    if (document.querySelector('.competence:nth-child(' + i + ')') == document.querySelector('.competence:last-child')) {
        document.querySelector('.competence:nth-child(' + i + ')').style = "display:none"
        i = 1
        document.querySelector('.competence:nth-child(' + i + ')').style = "display:block"
    }
}

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

var oui = document.querySelector(".menutel");
var deroulant = document.querySelector(".deroutel")

// menu déroulant téléphone

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