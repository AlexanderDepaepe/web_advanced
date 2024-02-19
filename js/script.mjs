'use strict';
// let name =prompt("Please enter your age: ")
// if (name >= 18){
//     alert('Welcome')}


// const form = document.getElementById('form');

// function validateForm(event) {
//     event.preventDefault();
//     let age = document.getElementById('leeftijd').value;
//     if (age >= 18) {
//     alert('Welcome');
//     }
//     else{
//         alert('You are not old enough');
//     }
// }
// form.addEventListener('submit', validateForm);

// const form = document.getElementById('word');

// function naamwijziging(event) {
//      event.preventDefault();
//      let zin = document.getElementById('zin').value;
//      console.log(zin.charAt(0).toUpperCase() + zin.slice(1)); // mogelijkheid 1
//      console.log(zin.substring(0,1).toUpperCase() + zin.substring(1));// mogelijkheid 2


//  }
//  form.addEventListener('submit', naamwijziging);

// let name1 = 'mike derycke'
// let name2 = '   max power    '
// let name3 = ' judas de verrader'

// function naamopkeus(naam) {
//     naam = naam.trim();
//     let naamArray = naam.split(' ');
//     for(let i=0; i<naamArray.length; i++){
//         naamArray[i] = naamArray[i].charAt(0).toUpperCase() + naamArray[i].slice(1);
//     }
//     console.log(naamArray.join(' '));



// }
// naamopkeus(name1);
// naamopkeus(name2);
// naamopkeus(name3);


// let zin = "Javascript is the main focus of Web Essentials";
// let newzin = zin.replace('Essentials', 'Advanced');
// console.log(newzin);

// let landen = ['België', 'Nederland', 'france'];
// let longestCountry = landen[0]; // Stel het eerste land in als het langste

//     for (let i = 1; i < landen.length; i++) {
//         if (landen[i].length > longestCountry.length) {
//             longestCountry = landen[i]; // Update het langste land indien nodig
//         }
//     }
//     console.log(longestCountry);



// let today = new Date();
// let day = today.getDate();
// let year = today.getFullYear();
// let monthIndex = today.getMonth();
// let monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// let month = monthNames[monthIndex];
// console.log(`${day} ${month} ${year}`);



// function daysUntilDate(targetDate) {
//     let today = new Date();

//     let timeDiff = targetDate.getTime() - today.getTime();

//     let days = Math.round(timeDiff / (1000 * 60 * 60 * 24));

//     return days;
// }
// let targetDate = new Date("2024-03-01");
// let hoelang = daysUntilDate(targetDate);
// console.log('Nog ' + hoelang + ' dagen en dan is het feest!');


const form = document.getElementById('for');
function validateForm(event) {
    event.preventDefault();
    let div = document.getElementById('resultaat');
    let naam = document.getElementById('gebruikersnaam').value;
    let naamindex = document.getElementById('gebruikersnaam');

    let errMsg = '';

    if (naam.length < 3) {
        errMsg += 'Gebruikersnaam moet minstens 3 karakters bevatten';
        naamindex.style.backgroundColor = 'red';
    }
    else{naamindex.style.backgroundColor = 'white';}

    let ww = document.getElementById('wachtwoord').value;
    let wwindex = document.getElementById('wachtwoord');
    if (ww.length < 6) {
        errMsg = 'Wachtwoord moet minstens 6 karakters bevatten';
        wwindex.style.backgroundColor = 'red';
    }
    else{
        wwindex.style.backgroundColor = 'white';
    }

    let ww2 = document.getElementById('wachtwoord-controle').value;
    let ww2index = document.getElementById('wachtwoord-controle');
    if (ww2 !== ww) {
        errMsg = 'Wachtwoorden komen niet overeen';
        ww2index.style.backgroundColor = 'red';
    }
    else{
        ww2index.style.backgroundColor = 'white';
    }
    let leeftijdString = document.getElementById('leeftijd').value;
    let leeftijdindex = document.getElementById('leeftijd');
    let leeftijd = new Date(leeftijdString);
    let today = new Date();
    let timeDiff = today.getTime() - leeftijd.getTime();

    let years = Math.round(timeDiff / (1000 * 60 * 60 * 24* 365));
    if (years < 18) {
        errMsg = 'Je moet minstens 18 jaar zijn';
        leeftijdindex.style.backgroundColor = 'red';
    }
    else{
        leeftijdindex.style.backgroundColor = 'white';
    }

    let checkbox = document.getElementById('voorwaarden').checked;
    if (!checkbox) {
        errMsg = 'Je moet de voorwaarden accepteren';
    }
    if (errMsg === '') {
        div.innerHTML = 'Registratie gelukt';
    }
    else {
        div.innerHTML = errMsg;
    }
}
form.addEventListener('submit', validateForm);
