const student = {
    naam: '',
    leeftijd: 0,
    studie: '',
    vakken: [],
    setPersonalDetails(details){
        let[naam, leeftijd, studie] = details;
        this.naam = naam;
        this.leeftijd = leeftijd;
        this.studie = studie;
    },
    addCourse(...course){
        this.vakken.push(...course);
    },
    showStudent(){
        let vakken = this.vakken.join(', ');
        console.log(`Mijn naam is ${this.naam}. Ik ben ${this.leeftijd} jaar oud en volg ${this.studie} aan de EhB \nMijn vakken zijn: ${vakken}`);
    }
};
let data = ['Mike Derycke', 29, 'Toegepaste informatica'];
student.setPersonalDetails(data);
let vak = '';
while(vak !== 'stop'){
    vak = prompt('Vak: ');
    if(vak !== 'stop') {
        student.addCourse(vak);}}

student.showStudent();