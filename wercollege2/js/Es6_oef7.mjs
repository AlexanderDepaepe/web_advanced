const button = document.getElementById('create');
let studentenlijst = [];
button.addEventListener('click', function () {
    function Student(naam, leeftijd, studie) {
        this.naam = naam;
        this.leeftijd = leeftijd;
        this.studie = studie;
        this.vakken = [];
    }
    Student.prototype.setPersonalDetails = function (naam, leeftijd, studie) {
        this.naam = naam;
        this.leeftijd = leeftijd;
        this.studie = studie;
    };

    Student.prototype.addCourse = function (...courses) {
        this.vakken.push(...courses);
    };

    Student.prototype.showStudent = function () {
        let vakken = this.vakken.join(', ');
        console.log(`Mijn naam is ${this.naam}. Ik ben ${this.leeftijd} jaar oud en volg ${this.studie} aan de EhB \nMijn vakken zijn: ${vakken}`);
    };

    let naam = prompt('Voer de naam van de student in:');
    let leeftijd = parseInt(prompt('Voer de leeftijd van de student in:'));
    let studie = prompt('Voer de studie van de student in:');

    const nieuweStudent = new Student(naam, leeftijd, studie);

    let vak = '';
    while (vak !== 'stop') {
        vak = prompt('vak: ');
        if (vak !== 'stop') {
            nieuweStudent.addCourse(vak);
        }
    }
    nieuweStudent.showStudent();
    studentenlijst.push(nieuweStudent);
});
const button2 = document.getElementById('show');
button2.addEventListener('click', function () {
    studentenlijst.forEach((student) => {
        student.showStudent();
    });
    

});
