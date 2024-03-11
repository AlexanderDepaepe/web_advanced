
const form = document.getElementById('form');
let studentenlijst = [];

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const naamInput = document.getElementById('inputname3');
    const leeftijdInput = document.getElementById('inputage3');
    const naam = naamInput.value;
    const leeftijd = leeftijdInput.value;
    const vakken = []

    const Degree = document.querySelector("input[type='radio']:checked").value;
    const checkboxen = document.querySelectorAll("input[type='checkbox']:checked");
    for(let vak of checkboxen){
        vakken.push(vak.value);
    }

    function Student(naam, leeftijd, Degree, vakken) {
        this.naam = naam;
        this.leeftijd = leeftijd;
        this.Degree = Degree;
        this.vakken = vakken;
    }

    

    const nieuweStudent = new Student(naam, leeftijd, Degree, vakken);


    studentenlijst.push(nieuweStudent);
    console.log(studentenlijst);
    showSuccessAlert();
});







function showSuccessAlert() {
    document.getElementById('inputname3').value = '';
    document.getElementById('inputage3').value = '';

    const checkboxen = document.querySelectorAll('input[type="checkbox"]');
    checkboxen.forEach(checkbox => {
        checkbox.checked = false;
    });

    const standaardRadiobutton = document.querySelector('input[type="radio"][checked]');
    if (standaardRadiobutton) {
        standaardRadiobutton.checked = true;
    }
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