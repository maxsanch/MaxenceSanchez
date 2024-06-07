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

document.querySelector('.bouton').addEventListener('click', couleure)

function couleure(){
    if(document.querySelector('.bouton').innerHTML == 'claire'){
        document.querySelector('.bouton').innerHTML='sombre'
        document.querySelector('link').href="styles/styles2.css"
    }
    else{
        document.querySelector('.bouton').innerHTML='claire'
        console.log(document.querySelector('.bouton').innerHTML)
        document.querySelector('link').href="styles/styles.css"
    }
}



