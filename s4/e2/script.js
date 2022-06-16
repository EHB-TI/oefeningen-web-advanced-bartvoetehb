let apiKey = 'cceb1d2d';

//http://www.omdbapi.com/?t=parasite

let currenData = null;
let count = 0;

window.onload = async function(event) {

    function setVisibility(tag, visible) {
        let content = document.getElementById(tag);

        if(visible) {
            content.removeAttribute("hidden");
        } else {
            content.setAttribute("hidden",true);
        }
    }

    let setCardVisibility = (visible) => setVisibility("content", visible);

    setCardVisibility(false);

    async function searchMovie(title) {
        //let response = await fetch("stubdata.json"); //avoiding to many calls for now while developping card
        let response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`);
        console.log(response.status);
        if(response.ok) {
            return await response.json();
        } else {
            return null;
        }
    }

    function setCard(data) {
        if(data && !("Error" in data)) {
            setCardVisibility(true);
            document.getElementById("poster").src = data.Poster;
            document.getElementById("title").innerHTML = data.Title;
            document.getElementById("description").innerHTML = 
                    `Directed in the year ${data.Year} 
                    by ${data.Director}, 
                    length is ${data.Runtime}`;
        }
    }

    async function setMovie() {
        //title, year, director, poster, runtime
        let movieTitle = document.getElementById("movieTitle").value;
        data = await searchMovie(movieTitle);
        console.log(JSON.stringify(data));
        if(data) {
            currenData = data;
        }
        setCard(data);
    }

    document.getElementById("movieSearch").addEventListener("submit",
        async function(event) {
            event.preventDefault();
            setMovie();
        }
    );

    document.getElementById("plusButton").addEventListener("click", 
        async function(event) {
            if(currenData) {
                count += Number.parseInt(currenData.Runtime);
                document.getElementById("counter").innerHTML = count;
            }
        }
    );
};