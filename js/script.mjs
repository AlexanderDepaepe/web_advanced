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
    let age = document.getElementById('leeftijd').value;
    if (age >= 18) {
        alert('Welcome');
    }
    else {
        alert('You are not old enough');
    }
}
form.addEventListener('submit', validateForm);