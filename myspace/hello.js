// console.log("hello world");

// function multiply(x, y) {
//     return x * y;
// }

// multiply.version = "v.1.1.1";

// console.log(multiply(2,4));
// console.log(multiply.version);

// function makeMultiplier(multiplier) {
//     var myFunc = function(x) {
//         return multiplier * x;
//     }
//     return myFunc;
// }

// console.log(makeMultiplier(5)(3))


// function doOperationOn(x, operation) {
//     return operation(x);
// }

// var result = doOperationOn(5, makeMultiplier(3));
// console.log(result);

// function test() {
//     console.log("Hello Courserea!");
//     this.hello = "test";
// }

// test();
// console.log(hello);
// console.log(this.hello);
////console.log(window.myName);

function Circle(radius) {
    this.radius = radius;

    // this.getArea = function() {
    //    return Math.PI * Math.pow(this.radius, 2);
    // }

    //don't do this you're overriding!!!
    // this.__proto__.getArea = function() {
    //     return Math.PI * Math.pow(this.radius, 2);
    // }

    //return {};
}

Circle.prototype.getArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
}



// Circle(10);
// console.log(radius);
// var a = new Circle(20);
// console.log(radius);
// console.log(a.radius);
// console.log(a.getArea())
// // console.log(Circle(20))

// var literalCircle = {
//     radius: 10,
//     getArea: function () {
//         var self = this;

//         var increaseRadius = function() {
//             self.radius = 20;
//             //this will nog work will be attached to global
//         }
//         increaseRadius();

//         console.log(this);

//         return Math.PI * Math.pow(this.radius, 2);
//     }
// };

// literalCircle.getArea();

// function Dog(name) {
//     this.name = name;
//   }
  
//   Dog.prototype.bark = function () {
//     console.log(this.name + " likes barking! Bark!");
//   }
  
//   var max = new Dog("Max", "Buddy");
//   max.bark();

var array = new Array();
array[0] = 1;
array[1] = 2;

array.forEach(element => {
    console.log("a" + element);
});

for(var i;i< array.length;i++) {
    console.log("b" + array[i]);
}

array.test = "hello";

//arrays zijn gewoon objecten dus index 
for(var i in array) {
    console.log("c" + array[i]);
}

console.log(array);