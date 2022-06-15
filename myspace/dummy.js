// const TEACHER = "Mike Derycke";
// x = 5;
// console.log(TEACHER);

'use strict'

let name = "WEB 2";
let year = 2;
let focus = 'JS';
let course = {name,year,focus, moveCourse(){ return this.year + 1}};
console.log(course.moveCourse());


let allestudenten = [1,2,3,4,5,6,7,8,9]
const [x1,x2,x3, ...reststudenten] = allestudenten;
console.log(allestudenten);
console.log(reststudenten);

// let testThis2 = () => {
//     console.log(`Arrow function this: ${this}`);
//     // Output: window object
//     };

//     let testThis3 = function() {
//         console.log(`Arrow function this: ${this}`);
//         // Output: window object
//         };

// testThis2();

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
let a = new testThis();
//let b = new testThis2(); //not workin on arrow-function

// class Hello {
//     constructor() {
//         this.a = 5;
//     }

//     sayHello() {
//         console.log(this.a);
//     }
// }

function Hello() {
    this.a = 5;
    this.sayHello = function() {
        console.log(this.a);
    };
}

let b = new Hello();
console.log(b.a);
b.sayHello();

function setSalary(){
    teachersSalary = 5000;
}
let teachersSalary = null;
setSalary();
console.log(teachersSalary);

(function testThis() {
    console.log(`Regular function this: ${this}`);
    // Output: undefined
    })()

let aa = ()=>{
    console.log(`Anomynous function this: ${typeof(this)}`);
};   

aa();

let connectMulti = ([player1,player2, ...l] = []) => {
//Do more than a single thing
    for (let n of l) {
        console.log(n);
    }
    return `${player1} and ${player2} are connected!`;

}
let list = ["Mike", "Peter","Heidi","Bart"];
console.log(connectMulti(list));

function test() {
    let i = 1;
    return undefined+1;
}

console.log(test());
    