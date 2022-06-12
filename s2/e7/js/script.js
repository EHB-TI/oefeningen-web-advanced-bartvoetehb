'use strict'

window.onload = function() {
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

     function loadStudent(event) {
        var details = [];
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

        console.log(student.showStudent());
    }

    document.getElementById("createStudent").addEventListener("click", loadStudent);
}



