// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument)
document.addEventListener("DOMContentLoaded", function (event) {
    function sayHello(event) {
        // console.log(event);
        // console.log(this); //pointing to containing elelemnt(h1)
        this.textContent = "Said it!";
        var name = document.getElementById("name").value;
        //var message = "Hello " + name + "!";
        var message = "<h2>Hello " + name + "!</h2>";
        document
            .getElementById("content")
            //.textContent = message;
            .innerHTML = message;
        
        if (name === "student") {
            //var title = document.getElementById("title")
            var title = document
                .querySelector("#title")
                .textContent;
            title += " & Lovin' it!";
            document
            //.querySelector("h1") vs queryAllSelector...
            .querySelector("#title") //use css selector
            .textContent = title;

            console.log(document.getElementById("name").value 
            + " Coursera!");

            console.log(document.querySelector("#name").value 
            + " Coursera!");
    
        }
    }
    
    //Unobstrusive event binding
    //document.querySelector("button").addEventListener("click", sayHello);
    document.querySelector("button").onclick = sayHello;
    document.querySelector("body")
        .addEventListener("mousemove",
        function(event) {
            if (event.shiftKey === true) {
                console.log("x: " + event.clientX);
                console.log("y: " + event.clientY);
            }
        });

}

);

