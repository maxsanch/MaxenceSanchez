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