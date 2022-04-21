let student = {
    name : "",
    age : 0,
    degree : "",
    courses : [],

    showStudent : function() {
        return `Student ${this.name} is ${this.age} en studeert ${this.degree} met vakken ${this.courses.join(', ')}.`;
    },

    addCourse : function(course) {
        this.courses.push(course)
    },

    setPersonalDetails : function(name, age, degree)  {
        this.name = name;
        this.age = age;
        this.degree = degree;
    }
}

// student.setPersonalDetails("Jan Janssens", 50, "TI")
// student.addCourse("Web Advanced")
// student.addCourse("Java Advanced")
// console.log(student.showStudent())

let naam = prompt("Geef naam: ");
let leeftijd = prompt("Geef leeftijd: ")
let richting = prompt("Geer richting: ")

student.setPersonalDetails(naam, leeftijd, richting)

let cursus = ""
while(true) {
    cursus = prompt("Geef cursus")
    if (cursus != "") {
        student.addCourse(cursus)
    } else {
        break;
    }
}

console.log(student.showStudent())





