let apiKey = 'cceb1d2d';

//http://www.omdbapi.com/?t=parasite

let currenData = null;

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
        //let response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`);
        let response = await fetch("stubdata.json"); //avoiding to many calls for now while developping card
        let data = await response.json();
        return data;
    }

    function setCard(data) {
        setCardVisibility(true);
        document.getElementById("poster").src = data.Poster;
        document.getElementById("title").innerHTML = data.Title;
        document.getElementById("description").innerHTML = 
                `Directed in the year ${data.Year} 
                by ${data.Director}, 
                length is ${data.Runtime}`;
    }

    document.getElementById("movieSearch").addEventListener("submit",
        async function(event) {
            event.preventDefault();
            let movieTitle = document.getElementById("movieTitle").value;
            data = await searchMovie(movieTitle);
            console.log(JSON.stringify(data));
            currenData = data;
            setCard(data);
            //title, year, director, poster, runtime
        }
    );
};