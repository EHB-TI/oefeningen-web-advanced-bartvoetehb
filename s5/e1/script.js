window.onload = 
async function(event) {
    console.log("hello 2");
    let result = await fetch("data.json");
    let json = await result.json();
    console.log(json);
    let firstParagraph = document.querySelector("p");
    firstParagraph.innerText = `Student ${json.name}, age ${json.age}, degree ${json.degree} 
                                    and courses ${json.courses.join(", ")}`


};