const form = document.getElementById('form');
const button = document.getElementById('show');
let studentenlijst = [];

function Student(naam, leeftijd, studie, vakken) {
    this.naam = naam;
    this.leeftijd = leeftijd;
    this.studie = studie;
    this.vakken = vakken.split('\n').map(vak => vak.trim());
}


function addStudent(naam, Leeftijd, studie, vakken) {
    let student = new Student(naam, Leeftijd, studie, vakken);
    studentenlijst.push(student);
}

function Student() {

    let naam = document.getElementById('naam').value;
    let leeftijd = document.getElementById('leeftijd').value;
    let studie = document.getElementById('richting').value;
    let vakken = document.getElementById('vakken').value;
    addStudent(naam, leeftijd, studie, vakken);
    
    document.getElementById('naam').value = '';
    document.getElementById('leeftijd').value = '';
    document.getElementById('studie').value = '';
    document.getElementById('vakken').value = '';
}

function showStudent() {
    let studentListHTML = '<h2>Studentenlijst</h2>';
  studentList.forEach(function(student, index) {
    studentListHTML += `<p><strong>Student ${index + 1}</strong><br>
                        Naam: ${student.name}<br>
                        Leeftijd: ${student.age}<br>
                        Richting: ${student.degree}<br>
                        Vakken: ${student.courses.join(', ')}</p>`;
  });
  document.getElementById('studentList').innerHTML = studentListHTML;
};



function showStudent() {
    console.log(studentenlijst);
}

button.addEventListener('click',showStudent)
form.addEventListener('submit',Student).event.preventDefault();
