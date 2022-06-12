let student = {
    name : "",
    age : 0,
    degree : "",
    courses : [],

    showStudent : function() {
        return `Student ${this.name} is ${this.age} en studeert ${this.degree} met vakken ${this.courses.join(', ')}.`;
    },

    addCourses : function(...newcourses) {
        this.courses = [...this.courses, ...newcourses];
    },

    setPersonalDetails : function(details)  {
        [this.name,this.age, this.degree] = details;
    }
}

// student.setPersonalDetails("Jan Janssens", 50, "TI")
// student.addCourse("Web Advanced")
// student.addCourse("Java Advanced")
// console.log(student.showStudent())

// let naam = prompt("Geef naam: ");
// let leeftijd = prompt("Geef leeftijd: ")
// let richting = prompt("Geer richting: ")

// student.setPersonalDetails([naam, leeftijd, richting])

details = [];
details.push(prompt("Geeft naam: "));
details.push(prompt("Geeft leeftijd: "));
details.push(prompt("Geeft richting: "));

student.setPersonalDetails(details);

let cursus = ""
while(true) {
    cursus = prompt("Geef cursus")
    if (cursus != "") {
        student.addCourses(cursus);
    } else {
        break;
    }
}

console.log(student.showStudent())





