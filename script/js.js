// // setInterval(changer, 1000);

// // let i = 1

// // document.querySelector('.competence:nth-child(1)').style = "display:block"

// // function changer() {
// //     document.querySelector('.competence:nth-child(' + i + ')').style = "display:none"
// //     i = i + 1
// //     console.log(i)
// //     document.querySelector('.competence:nth-child(' + i + ')').style = "display:block"
// //     if (document.querySelector('.competence:nth-child(' + i + ')') == document.querySelector('.competence:last-child')) {
// //         document.querySelector('.competence:nth-child(' + i + ')').style = "display:none"
// //         i = 1
// //         document.querySelector('.competence:nth-child(' + i + ')').style = "display:block"
// //     }
// // }


// document.addEventListener('DOMContentLoaded', () => {
//     const words = ["Cinquième", "Sixième", "Septième"];
//     const container = document.querySelector('.tout');

//     words.forEach((word, index) => {
//         const span = document.createElement('span');
//         span.className = 'competence';
//         span.style.animationDelay = `${(index + 4) * 1}s`; // Ajuste les délais en fonction des nouveaux mots
//         span.textContent = word;
//         container.appendChild(span);
//     });
// });



