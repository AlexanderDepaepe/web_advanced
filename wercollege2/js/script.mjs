'use strict';
// oefening 1
// const color = {
//     nR: 0,
//     nG: 0,
//     nB: 0,

//     setColor(R,G,B){
//         this.nR = R;
//         this.nG = G;
//         this.nB = B;
//     },
//     showColor(){
//         console.log(`rgb(${this.nR}, ${this.nG}, ${this.nB})`);
// }
// };

// color.setColor(12,34,56);
// color.showColor();
// color.setColor(255,124,56);
// color.showColor();
// color.setColor(255,0,100);
// color.showColor();


//oefening 2

// const color = {
//     nR: 0,
//     nG: 0,
//     nB: 0,

//     setColor(R,G,B){
//         this.nR = R;
//         this.nG = G;
//         this.nB = B;
//     },
//     showColor(){
//         console.log(`rgb(${this.nR}, ${this.nG}, ${this.nB})`);
// }
// };

// let R = prompt('Enter a number between 0 and 255 for red');
// let G = prompt('Enter a number between 0 and 255 for green');
// let B = prompt('Enter a number between 0 and 255 for blue');

// if (0 < R < 255 || 0 < G <255 || 0 < B <255){
//     console.log('succes');
//     color.setColor(R,G,B);
//     color.showColor();
// }

//oeferning 3
// const color = {
//     nR: 0,
//     nG: 0,
//     nB: 0,

//     setColor(R,G,B){
//         this.nR = R;
//         this.nG = G;
//         this.nB = B;
//     },
//     showColor(){
//      const style = 'background-color: rgb('+this.nR+', '+this.nG+', '+this.nB+');font-size: 2em;';
//      console.log("%cHooray", style);;
// }
// };

// let R = prompt('Enter a number between 0 and 255 for red');
// let G = prompt('Enter a number between 0 and 255 for green');
// let B = prompt('Enter a number between 0 and 255 for blue');

// if (0 <= R && R <= 255 && 0 <= G && G <= 255 && 0 <= B && B <= 255) {
//     console.log('succes');
//     color.setColor(R,G,B);
//     color.showColor();
// }

//oefening 4

const student = {
    naam: '',
    leeftijd: 0,
    studie: '',
    vakken: [],
    setPersonalDetails(naam, leeftijd, studie){
        this.naam = naam;
        this.leeftijd = leeftijd;
        this.studie = studie;
    },
    addCourse(course){
        this.vakken.push(course);
    },
    showStudent(){
        let vakken = this.vakken.join(', ');
        console.log(`Mijn naam is ${this.naam}. Ik ben ${this.leeftijd} jaar oud en volg ${this.studie} aan de EhB \nMijn vakken zijn: ${vakken}`);
    }
};
let naam = prompt('Naam:');
let leeftijd = prompt('Leeftijd: ');
let studie = prompt('Studie: ');
student.setPersonalDetails(naam, leeftijd, studie);
let aantalVakken = prompt('Hoeveel vakken heb je?');
for (let i = 0; i < aantalVakken; i++){
    let vak = prompt('Vak: ');
    student.addCourse(vak);
}

student.showStudent();