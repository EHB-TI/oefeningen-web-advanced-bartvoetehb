'use strict'

window.onload = function() {
    let list = JSON.parse(localStorage.getItem("studenten"));
    console.log(list);
    let content = document.getElementById("content");
    content.innerHTML = "";
    for (let s of list) {
        let a = document.createElement("li");
        a.setAttribute("class","list-group-item");
        a.innerText = s.name;
        content.appendChild(a);
    }
}