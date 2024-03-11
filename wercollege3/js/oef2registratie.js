
const form = document.getElementById('form');
let studentenlijst = [];

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const naamInput = document.getElementById('inputname3');
    const leeftijdInput = document.getElementById('inputage3');
    const naam = naamInput.value;
    const leeftijd = leeftijdInput.value;

    function Student(naam, leeftijd) {
        this.naam = naam;
        this.leeftijd = leeftijd;
    }

    Student.prototype.showStudent = function () {
        console.log(`Naam: ${this.naam}, Leeftijd: ${this.leeftijd}`);
    };

    const nieuweStudent = new Student(naam, leeftijd);

    nieuweStudent.showStudent();
    studentenlijst.push(nieuweStudent);
    showSuccessAlert();
});
function showSuccessAlert() {
    document.getElementById('inputname3').value = '';
    document.getElementById('inputage3').value = '';

   
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('alert', 'alert-success', 'mt-3');
    alertDiv.setAttribute('role', 'alert');
    alertDiv.textContent = 'Student succesvol geregistreerd!';

    
    const container = document.querySelector('.container');
    container.insertBefore(alertDiv, container.firstChild);

    
    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}