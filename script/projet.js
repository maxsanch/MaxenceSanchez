let link = new URLSearchParams(location.search);
let rat = link.get('selection');

if (rat == "Web") {
    let projets = ""

    for (let test in SAE['Web']) {
        projets += "<a href='projetsdétail.html?domaine=Web&projet=" + test + "'><div class='projet2'><div class='titrehaut'><h1>" + SAE['Web'][test]['titre'] + "</h1></div><div class='centreinfo'><div class='informations'>" + SAE['Web'][test]['description'] + "</div></div><div class='imagesposition'><div class='centre'><div class='imagecentre'><img src='../img/imagesprojets/Web/" + test + " 1.png' alt='rer'></div><div class='abso1'><img src='../img/imagesprojets/Web/" + test + " 2.png' alt='rer'></div><div class='abso2'><img src='../img/imagesprojets/Web/" + test + " 3.png' alt='rer'></div></div></div></div></a>"
    }

    document.querySelector('.total').innerHTML = projets
    document.querySelector('.choixproj:nth-child(1)').style.color = "#E52165"
}

if (rat == "video") {
    let projets = ""

    for (let test in SAE['vidéo']) {
        projets += "<a href='projetsdétail.html?domaine=vidéo&projet=" + test + "'><div class='projet2'><div class='titrehaut'><h1>" + SAE['vidéo'][test]['titre'] + "</h1></div><div class='centreinfo'><div class='informations'>" + SAE['vidéo'][test]['description'] + "</div></div><div class='imagesposition'><div class='centre'><div class='imagecentre'><img src='../img/imagesprojets/vidéo/" + test + " 1.png' alt='rer'></div><div class='abso1'><img src='../img/imagesprojets/vidéo/" + test + " 3.png' alt='rer'></div><div class='abso2'><img src='../img/imagesprojets/vidéo/" + test + " 2.png' alt='rer'></div></div></div></div></a>"
    }

    document.querySelector('.total').innerHTML = projets
    document.querySelector('#drei').style.color = "#E52165"
}



if (rat == "web design") {
    let projets = ""

    for (let test in SAE['web design']) {
        projets += "<a href='projetsdétail.html?domaine=web design&projet=" + test + "'><div class='projet2'><div class='titrehaut'><h1>" + SAE['web design'][test]['titre'] + "</h1></div><div class='centreinfo'><div class='informations'>" + SAE['web design'][test]['description'] + "</div></div><div class='imagesposition'><div class='centre'><div class='imagecentre'><img src='../img/imagesprojets/web design/" + test + " 1.png' alt='rer'></div><div class='abso1'><img src='../img/imagesprojets/web design/" + test + " 2.png' alt='rer'></div><div class='abso2'><img src='../img/imagesprojets/web design/" + test + " 3.png' alt='rer'></div></div></div></div></a>"
    }

    document.querySelector('.total').innerHTML = projets
    document.querySelector('#zwei').style.color = "#E52165"
    
}

if (rat == "graphisme") {
    let projets = ""

    for (let test in SAE['graphisme']) {
        projets += "<a href='projetsdétail.html?domaine=graphisme&projet=" + test + "'><div class='projet2'><div class='titrehaut'><h1>" + SAE['graphisme'][test]['titre'] + "</h1></div><div class='centreinfo'><div class='informations'>" + SAE['graphisme'][test]['description'] + "</div></div><div class='imagesposition'><div class='centre'><div class='imagecentre'><img src='../img/imagesprojets/graphisme/" + test + " 1.png' alt='rer'></div><div class='abso1'><img src='../img/imagesprojets/graphisme/" + test + " 3.png' alt='rer'></div><div class='abso2'><img src='../img/imagesprojets/graphisme/" + test + " 2.png' alt='rer'></div></div></div></div></a>"
    }

    document.querySelector('.total').innerHTML = projets
    document.querySelector('#vier').style.color = "#E52165"
}


if (rat == "divers") {
    let projets = ""

    for (let test in SAE['divers']) {
        projets += "<a href='projetsdétail.html?domaine=divers&projet=" + test + "'><div class='projet2'><div class='titrehaut'><h1>" + SAE['divers'][test]['titre'] + "</h1></div><div class='centreinfo'><div class='informations'>" + SAE['divers'][test]['description'] + "</div></div><div class='imagesposition'><div class='centre'><div class='imagecentre'><img src='../img/imagesprojets/divers/" + test + " 1.png' alt='rer'></div><div class='abso1'><img src='../img/imagesprojets/divers/" + test + " 2.png' alt='rer'></div><div class='abso2'><img src='../img/imagesprojets/divers/" + test + " 3.png' alt='rer'></div></div></div></div></a>"
    }

    document.querySelector('.total').innerHTML = projets
    document.querySelector('#funf').style.color = "#E52165"
}


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