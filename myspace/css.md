# summary to learn

## ES6

* 'use strict'
  * Nodige controles
  * Bijvoorbeeld een variabele die nog niet is gedeclareerd zal niet worden toegelaten
* Hoisting (vs let/var)
  * Zal declaraties automatisch naar top scope
  * let zal geen hoisting toepassen
  * var nog daar voor backwards compatibility
  * Je kan sneller fouten detecteren

Hier eachter geen probleem want pas uitgevoerd...

~~~javascript
function setSalary(){
    teachersSalary = 5000;
}
let teachersSalary = null;
setSalary();
console.log(teachersSalary);
~~~

* const
  * niet aanpasbaar
  * je moet nieuwe waardes meegeven

~~~js
const hello = 1;
~~~

Template literals => backticks en ${}

destructuring

~~~js
let teachers = ['MD','RD','TT'];
let [lector1,,lector2] = teachers;

let course = {
    name: 'WEB 2',
    year: 2,
    focus: 'JS'
};

//gaat kijken naar de naam niet de positie
let {name, year, focus} = course;
~~~

Oppassen met function destructuring (this zal niet meer werken)


~~~js
let name = "WEB 2";
let year = 2;
let focus = 'JS';
let course = {name,year,focus, moveCourse(){ return this.year + 1}};
console.log(course.moveCourse());
~~~

* for ... of
* spread-operator => ...
  * lijst omzetten naar argumenten
  * functie aanroepen
  * lijst concateneren
* rest-operator

~~~js
allestudenten = [1,2,3,4,5,6,7,8,9]
const [x1,x2,x3, ...reststudenten] = allestudenten;
console.log(allestudenten);
console.log(reststudenten);
~~~

wordt ook gebruikt voor varargs en overloading

## Functies

~~~js
function test() {

}

let test = function() {

};

let test = (a,b) => {

}
~~~

* concise (auto return) vs "block body" syntax
* arrow vs gewone functie, this zal verschillend zijn
  * this => ‘this’ will refer to the scope in which the
    function is called

~~~js
//Regular function
function testThis(){
    console.log(`Regular function this: ${this}`);
    // Output: undefined
}
//Arrow function
let testThis2 = () => {
    console.log(`Arrow function this: ${this}`);
    // Output: window object
}
testThis();
testThis2();
a = new testThis();
a = new testThis2();
~~~

Destructuring in functie...

~~~js
let connectMulti2 = ([player1 = "Bot1",player2 = "Bot2"]) => {
//Do more than a single thing
return `${player1} and ${player2} are connected!`;
}
let list = ["Mike", "Peter"];
connectMulti(list);
~~~

~~~js
class Hello {
     constructor() {
         this.a = 5;
     }

     sayHello() {
         console.log(this.a);
     }
}
~~~

~~~js
function Hello() {
    this.a = 5;
    this.sayHello = function() {
        console.log(this.a);
    };
}
~~~


## Promise

~~~js

function loadScript() {
    return new Promise((resolve,reject) {
        ...
        resolve(a);
        ...
        reject(b)
    });
}

let promise = loadScript("math.js");
promise.then(
    script => alert(`${script.src} is loaded!`),
    error => alert(`Error: ${error.message}`)
);

~~~

* async geeft basically een promise terug
* await gaat wachten

~~~js
fetch("https://jsonplaceholder.typicode.com/posts")
.then(resp => {return resp.json();})
.then(data => {console.log(data)});
~~~

## DOM-manipulation

~~~js
let newDiv = document.createElement("div");
document.getElementById("hello").appendChild(nediv)


// value, innerText, innerHtml
let degree = document.getElementById("hello");
//...
let degree = document.querySelector("input[type=radio]:checked").value;

document.onload(function(event) {
    //...
});

document.querySelector("button").onclick = sayHello;
    document.querySelector("body")
        .addEventListener("mousemove",
        function(event) {
            if (event.shiftKey === true) {
                console.log("x: " + event.clientX);
                console.log("y: " + event.clientY);
            }
        });


~~~

## fetch

~~~js
response = fetch(url);
response.then(
  result  => return result;
  error => return error;

)


response.text
response.json()
response.status
response.ok
~~~

## Reminder css

* css-selector
  * pseudoclass : => state of eleemnt
  * pseudoelement ::
* element selector
* id selector #<id>
* class selector .<class>  (or combination like p.myclass
* can have more classes..
* universal selector *
* grouping selector h1, h2, p
* combinator
  * descendant div p
  * child div > p
  * Adjacent Sibling Selector div + p (directly after)
  * General Sibling Selector div ~ p

## Transition

* **transition** => eigenschappen van transitie voor een element  
  (toegepast op element-selector)
  * maw hoe dien je te **reageren** als een **property** **wijzigt** (zoals background-color)
  * 4 eigenschappen (**starten** allemaal met **transition-**)
    * **property**
    * **duration** =>
    * **timing-function** => ease, linear, ease-out, ease-in, ease-in-out
    * **delay** => ms àf s => wachten met transitie


Voorbeeld:

* Via pseudoclass transitie veroorzaken in background-color
* Deze background-color bij de transitie aanduiden

~~~css
button {
    background-color: red;
    color: white;
    transition-property: background-color, color;
    transition-duration: 3000ms;
    transition-timing-function: ease;
    transition-delay: 1s;
    transition: transform 1s, color 5s ease 1s; 
}


button:hover {
    background-color: yellow;
    color: black;
   
    transform-origin: bottom;
    transform: skew(20deg, -40deg);
} 
~~~

## Transformation

* **transformation** => beweging beschrijven, element animeren
  * 4 soorten (kunnen ook negatief gaan)
    * **scale** => number
    * **skew** => deg
    * **translate** => px
    * **rotate** => deg, turn
  * Meeste hebben 3 versies (**X,Y en gewoon**)
  * **transform-origin** => relativiteit
    * top, bottom, left, right
    * combos zoals (transform-origin: top left;)
    * percentates (transform-origin: 70% 80%;) 
    * pixels (transform-origin: 100px 500px;)
  * je kan **properties** toevoegen voor **transform** bij **transition** aanduiden
    * transition: transform 1s; (bijvoorbeeld)

Voorbeeld toegepast op pseudo-class hover, skew zorg voor een draai wanneer je hovert over deze buttons...

~~~css
button:hover {
    transform-origin: bottom;
    transform: skew(20deg, -40deg);
} 
~~~

## Animations

* Regel startende met @keyframes
* Past staatwijziging en transformaties toe
* Tijdens laden (tenzij op pseudoklasse)
* Eigenschappen bij het toepassen (voorafgegaan door animation-)
  * duration
  * iteration-count
  * direction => alternate, reverse, alternate-reverse
  * timing-function => ease, linear, ease-out, ease-in, ease-in-out
  * delay => vooraleer start;
  * fill-mode => waar het zich moet bevinden na animatie => forwards, backward


* Met from-to



~~~css
.myclass {
    animation-name: moving;
    animation-duration: 3s;
    animation-iteration-count: 2;
    animation-direction: alternate-reverse;
    animation-timing-function: ease-in;
    animation-delay: 1s;
    animation-fill-mode: forwards;
}
~~~


~~~css
@keyframes moving {
    /* Starting point of the animation: positionx 0 */
    from { transform: translateX(0); }
    /* Endpoint of the animation: position x 800px */
    to { transform: translateX(800px); }
}
~~~

Met tussenfases...

~~~css
@keyframes moving {
    /* from { transform: translate(0);}
    to { transform: translateX(800px);} */

    0% { transform: translate(-250px);}
    50% { transform: translateX(800px);}
    100% { transform: translate(800px,500px);}
}
~~~

### grid

CSS Grid => stuctuur en layout
responsive (% ipv pixels)
theorie en tools

line
track
cell
area

display: grid
display: inline-grid;

grid-template-columns: 40ps 50px auto 50px 10px;
grid-template-rows: 25% 100px auto;

grid-template-columns: [first] 40ps [line2] 50px auto 50px 10px [end];
grid-template-rows: 25% 100px auto;

grid -> pagina
flex -> blok
