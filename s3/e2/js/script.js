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
        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;

        let student = new Student(name, age);
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

    let regForm = document.getElementById("registerForm");
    regForm.addEventListener('submit',
        function(event) {
            event.preventDefault();
            console.log("a");
        }
    );

    regForm.addEventListener('submit', loadStudent);
}



