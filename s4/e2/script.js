let apiKey = 'cceb1d2d';

//http://www.omdbapi.com/?t=parasite

window.onload = async function(event) {
    async function searchMovie(title) {
        console.log("hello");   
        let response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`);
        let data = await response.json();
        return data;
    }

    document.getElementById("movieSearch").addEventListener("submit",
        async function(event) {
            event.preventDefault();
            let movieTitle = document.getElementById("movieTitle").value;
            data = await searchMovie(movieTitle);
            document.getElementById("content").innerText = JSON.stringify(data);
        }
    );
};