const form = document.querySelector('form');  
rannumber = Math.floor(Math.random() * 20); 

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const guess = document.getElementById('number').value;
    const alertDiv = document.getElementById('koen');
    comparenumber(guess)
    .then((message) => {
        alertDiv.textContent = message;
    })
    .catch((error) => {
        alertDiv.textContent = error;
    });
    

});
function comparenumber(guess){
    return new Promise((resolve, reject)=>{
    if (rannumber == guess){
        resolve('Je hebt het mysterieuze nummer geraden!')

    }else if(rannumber > guess){
        resolve('Het mysterieuze getal is hoger. Raad nog eens!')
    }else if(guess < 0 || guess > 20){
        resolve('Dat is geen geldig nummer (Fout)')
    }else{
        reject('Het mysterieuze getal is lager. Raad nog eens!')
    }});
}


