'use strict'

window.onload = function() {
    let studenten = [];

    function Student(name, age, degree) {
        this.name = name;
        this.age = age;
        this.degree = degree;
        this.courses = [];

        this.showStudent = function() {
            return `Student ${this.name} is ${this.age} en studeert ${this.degree} met vakken ${this.courses.join(', ')}.`;
        };

        this.addCourses = function(...newcourses) {
            this.courses = [...this.courses, ...newcourses];
        };
    }

     function loadStudent(event) {
        var details = [];
        details.push(prompt("Geeft naam: "));
        details.push(prompt("Geeft leeftijd: "));
        details.push(prompt("Geeft richting: "));

        let student = new Student(...details);

        let cursus = ""
        while(true) {
            cursus = prompt("Geef cursus")
            if (cursus != "") {
                student.addCourses(cursus);
            } else {
                break;
            }
        }

        studenten.push(student);
        console.log(student.showStudent());
    }

    function showStudents(event) {
        let div = document.getElementById("content");
        div.innerHTML = '';

        for (let student of studenten) {
            let p = document.createElement("p");
            p.innerHTML = student.showStudent();
            div.appendChild(p);
        }
    }

    document.getElementById("createStudent").addEventListener("click", loadStudent);
    document.getElementById("showStudents").addEventListener("click", showStudents);
}



