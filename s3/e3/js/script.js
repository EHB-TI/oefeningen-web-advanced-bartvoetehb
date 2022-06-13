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

     function addStudent(event) {
        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;

        let student = new Student(name, age);
        studenten.push(student);

        document.getElementById("name").value = '';
        document.getElementById("age").value = '';

    }

    let regForm = document.getElementById("registerForm");
    regForm.addEventListener('submit',
        function(event) {
            event.preventDefault();
        }
    );

    regForm.addEventListener('submit', addStudent);
}



