let apiKey = 'cceb1d2d';

//http://www.omdbapi.com/?t=parasite

window.onload = async function(event) {
    console.log(apiKey);
    let title = "parasite";
    let response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`);
    let data = await response.json();
    //console.log(data);
    document.getElementById("content").innerText = JSON.stringify(data);
};