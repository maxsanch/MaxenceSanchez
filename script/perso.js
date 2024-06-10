

// affichage des projets perso

let photos = ""

for (let pho in perso["photo"]) {
  photos += '<a href="projetperso2.html?number=' + pho + '"><img src="../img/photos/' + pho + '.jpg" class="perso" alt="photo"></img></a>'
}

document.querySelector("#photo").innerHTML = photos

let dessins = ""

for (let des in perso["dessin"]) {
  dessins += '<a href="projetperso2.html?number=' + des + '"><img src="../img/dessins/' + des + '.jpg" class="perso" alt="photo"></img></a>'
}

document.querySelector("#dessins").innerHTML = dessins

let trois = ""

for (let t in perso["TroisD"]) {
  trois += '<a href="projetperso2.html?number=' + t + '"><img src="../img/3D/' + t + '.jpg" class="perso" alt="photo"></img></a>'
}

document.querySelector("#marchestp").innerHTML = trois

document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  });
});
