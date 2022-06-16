'use strict'

let apiKey = 'cceb1d2d';

//http://www.omdbapi.com/?t=parasite

let currenData = null;
let count = 0;

const baseurl = "http://www.omdbapi.com/"

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
    let setSearchListVisbility  = (visible) => setVisibility("searchList", visible);

    
    setCardVisibility(false);
    //setSearchListVisbility(false);

    function urlWithQuery() {
        return `${baseurl}?apikey=${apiKey}` 
    }

    async function searchMovie(title) {
        //let response = await fetch("stubdata.json"); //avoiding to many calls for now while developping card
        let response = await fetch(`${urlWithQuery()}&t=${title}`);
        if(response.ok) {
            return await response.json();
        } else {
            return null;
        }
    }

    async function searchMovies(title) {
        let response = await fetch(`${urlWithQuery()}&s=${title}`);
        //let response = await fetch("stubsearchdata.json");
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

    async function setMovie(movieTitle) {
        //title, year, director, poster, runtime
        let data = await searchMovie(movieTitle);
        console.log(JSON.stringify(data));
        if(data) {
            currenData = data;
        }
        setCard(data);
    }

    document.getElementById("movieSearch").addEventListener("submit",
        async function(event) {
            event.preventDefault();
            setMovie(document.getElementById("movieTitle").value);
        }
    );

    document.getElementById("movieTitle").addEventListener("keyup",
        async function(event) {
            let data = await searchMovies(event.target.value);
            // console.log(data);
            // console.log(JSON.stringify(data));

            let resultList = data.Search;
            console.log(resultList);

            let pos = 0;

            let searchList = document.getElementById("searchList");
            for (let child of searchList.children) {
                let movie = resultList[pos];
                child.innerText = movie.Title;
                pos = pos + 1;
            }

        }
    );


    let searchList = document.getElementById("searchList");
    for (let child of searchList.children) {
        child.addEventListener("click",function(event){
            setMovie(event.target.innerText);
        });
    }

    document.getElementById("plusButton").addEventListener("click", 
        async function(event) {
            if(currenData) {
                count += Number.parseInt(currenData.Runtime);
                document.getElementById("counter").innerHTML = count;
            }
        }
    );
};