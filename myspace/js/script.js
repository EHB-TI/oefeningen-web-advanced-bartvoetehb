// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument)


function sayHello() {
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

    }
}