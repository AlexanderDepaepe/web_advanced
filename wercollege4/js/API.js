const zoek = document.getElementById('search-form')

zoek.addEventListener('submit', function(event) {
    event.preventDefault();
    const zoekTerm = document.getElementById('search-input').value;
    zoekMovie(zoekTerm);
});

function zoekMovie(title) {
    let apiKey = 'ef8ee6fa';
    let apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`;

    fetch(apiUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            displayMovie(data);
        })
       
}

function displayMovie(data) {
    const movieDetails = document.getElementById('movie-details');
    movieDetails.innerHTML = `
        <h2 class="text-center">${data.Title}</h2>
        <p class="text-center">Jaar van uitgave: ${data.Year}</p>
        <p class="text-center">Regisseur: ${data.Director}</p>
        <p class="text-center">Runtime: ${data.Runtime}</p>
        <div class="text-center">
            <img src="${data.Poster}" alt="${data.Title} Poster" style="max-width: 200px;">
        </div>
        <p class="text-center">Runtime: ${data.Runtime}</p>
    `;
}
