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
    if(deroulant.classList.contains('deroutelo')){
      document.querySelector(".deroutel").classList.remove("deroutelo");
      document.querySelector("header").classList.remove("header2");
    }
    else{
      document.querySelector(".deroutel").classList.add("deroutelo");
      document.querySelector("header").classList.add("header2");
    }
  });