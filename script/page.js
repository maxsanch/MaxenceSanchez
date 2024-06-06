let bonneSAE = new URLSearchParams(location.search);
let LaSAE = bonneSAE.get('projet');
let dom = bonneSAE.get('domaine');

console.log(dom)
console.log(LaSAE)


document.querySelector('.titre>h2').innerHTML = SAE[dom][LaSAE]['titre']
document.querySelector('.illus').innerHTML= '<img src="../img/imagesprojets/'+dom+'/'+LaSAE+' 1.png" alt="illustration_projet">'
document.querySelector('.txt').innerHTML = SAE[dom][LaSAE]['description']


document.querySelector('#deuxième>h2').innerHTML = SAE[dom][LaSAE]['titre']
document.querySelector('#deux').innerHTML= '<img src="../img/imagesprojets/'+dom+'/'+LaSAE+' 3.png" alt="illustration_projet">'
document.querySelector('#txtdeux').innerHTML = SAE[dom][LaSAE]['étapes']