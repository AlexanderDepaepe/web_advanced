window.onload = () => {
    console.log('API.js loaded');
    let promise = fetch('http://www.omdbapi.com/?apikey=ef8ee6fa&t=parasite');
    promise.then((response) => {
        return response.json();
        
    })
    .then((data) => {
        console.log(data);
    })

    
}