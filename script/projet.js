let projets = ""

for (let test in SAE['Web']) {
    document.querySelector('.choixproj:nth-child(1)').classList.toggle('choixproj2')
    projets += "<div class='projet2'><div class='titrehaut'><h1>"+SAE['Web'][test]['titre']+"</h1></div><div class='centreinfo'><div class='informations'>"+SAE['Web'][test]['description']+"</div></div><div class='imagesposition'><div class='centre'><div class='imagecentre'><img src='../img/imagesprojets/Web/"+test+" 1.png' alt='rer'></div><div class='abso1'><img src='../img/imagesprojets/Web/"+test+" 2.png' alt='rer'></div><div class='abso2'><img src='../img/imagesprojets/Web/"+test+" 3.png' alt='rer'></div></div></div></div>"
}

document.querySelector('.total').innerHTML = projets


designe = document.querySelector('.choixproj:nth-child(3)')
designe.addEventListener('click', video)

function video() {
    let projets = ""
    document.querySelector('.choixproj:nth-child(3)').classList.toggle('choixproj2')

    for (let test in SAE['vidéo']) {
        projets += "<div class='projet2'><div class='titrehaut'><h1>"+SAE['vidéo'][test]['titre']+"</h1></div><div class='centreinfo'><div class='informations'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque adipisci veniam iste dolor ea cupiditate soluta, sequi dolores cum autem facilis obcaecati corrupti laborum. Ad deserunt id molestias autem nobis?</div></div><div class='imagesposition'><div class='centre'><div class='imagecentre'><img src='../img/imagesprojets/tet.png' alt='rer'></div><div class='abso1'><img src='../img/imagesprojets/tet.png' alt='rer'></div><div class='abso2'><img src='../img/imagesprojets/tet.png' alt='rer'></div></div></div></div>"
    }

    document.querySelector('.total').innerHTML = projets
}

designe = document.querySelector('.choixproj:nth-child(1)')
designe.addEventListener('click', web)

function web() {
    let projets = ""

    for (let test in SAE['Web']) {
        projets += "<div class='projet2'><div class='titrehaut'><h1>"+SAE['Web'][test]['titre']+"</h1></div><div class='centreinfo'><div class='informations'>"+SAE['Web'][test]['description']+"</div></div><div class='imagesposition'><div class='centre'><div class='imagecentre'><img src='../img/imagesprojets/Web/"+test+" 1.png' alt='rer'></div><div class='abso1'><img src='../img/imagesprojets/Web/"+test+" 2.png' alt='rer'></div><div class='abso2'><img src='../img/imagesprojets/Web/"+test+" 3.png' alt='rer'></div></div></div></div>"
    }

    document.querySelector('.total').innerHTML = projets
}

designe = document.querySelector('.choixproj:nth-child(2)')
designe.addEventListener('click', design)

function design() {
    let projets = ""

    for (let test in SAE['web design']) {
        projets += "<div class='projet2'><div class='titrehaut'><h1>"+SAE['web design'][test]['titre']+"</h1></div><div class='centreinfo'><div class='informations'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque adipisci veniam iste dolor ea cupiditate soluta, sequi dolores cum autem facilis obcaecati corrupti laborum. Ad deserunt id molestias autem nobis?</div></div><div class='imagesposition'><div class='centre'><div class='imagecentre'><img src='../img/imagesprojets/web design/"+test+" 1.png' alt='rer'></div><div class='abso1'><img src='../img/imagesprojets/web design/"+test+" 2.png' alt='rer'></div><div class='abso2'><img src='../img/imagesprojets/web design/"+test+" 3.png' alt='rer'></div></div></div></div>"
    }

    document.querySelector('.total').innerHTML = projets
}

designe = document.querySelector('.choixproj:nth-child(4)')
designe.addEventListener('click', graphisme)

function graphisme() {
    let projets = ""

    for (let test in SAE['graphisme']) {
        projets += "<div class='projet2'><div class='titrehaut'><h1>"+SAE['graphisme'][test]['titre']+"</h1></div><div class='centreinfo'><div class='informations'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque adipisci veniam iste dolor ea cupiditate soluta, sequi dolores cum autem facilis obcaecati corrupti laborum. Ad deserunt id molestias autem nobis?</div></div><div class='imagesposition'><div class='centre'><div class='imagecentre'><img src='../img/imagesprojets/tet.png' alt='rer'></div><div class='abso1'><img src='../img/imagesprojets/tet.png' alt='rer'></div><div class='abso2'><img src='../img/imagesprojets/tet.png' alt='rer'></div></div></div></div>"
    }

    document.querySelector('.total').innerHTML = projets
}


designe = document.querySelector('.choixproj:nth-child(5)')
designe.addEventListener('click', divers)

function divers() {
    let projets = ""

    for (let test in SAE['divers']) {
        projets += "<div class='projet2'><div class='titrehaut'><h1>"+SAE['divers'][test]['titre']+"</h1></div><div class='centreinfo'><div class='informations'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque adipisci veniam iste dolor ea cupiditate soluta, sequi dolores cum autem facilis obcaecati corrupti laborum. Ad deserunt id molestias autem nobis?</div></div><div class='imagesposition'><div class='centre'><div class='imagecentre'><img src='../img/imagesprojets/tet.png' alt='rer'></div><div class='abso1'><img src='../img/imagesprojets/tet.png' alt='rer'></div><div class='abso2'><img src='../img/imagesprojets/tet.png' alt='rer'></div></div></div></div>"
    }

    document.querySelector('.total').innerHTML = projets
}




