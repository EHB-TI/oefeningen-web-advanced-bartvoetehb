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

    function clearFields() {
        document.getElementById("name").value = '';
        document.getElementById("age").value = '';
    }

    function showAlert(success, message) {
        let result = success ? "success" : "danger";
        
        let content = document.createElement("div");
        content.setAttribute("class", `alert alert-${result}`);
        content.setAttribute("role","alert");
        content.innerText = message;
        
        document.getElementById("messages").innerHTML = "";
        document.getElementById("messages").appendChild(content);
    }

    function addStudent(event) {
        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;

        
        if(name === '' || age === ''){
            showAlert(false,"Either name or age was not inserted");
        } else {
            let degree = document.querySelector("input[type=radio]:checked");
            let student = new Student(name, age,degree.value);
            
            let newCourses = document.querySelectorAll("input[type=checkbox]:checked");
            for(let newCourse of newCourses) {
                student.addCourses(newCourse.value);
            }

            studenten.push(student);
            localStorage.setItem("studenten", JSON.stringify(studenten));

            showAlert(true,"Student created: " + student.showStudent());
            
        }
        clearFields();
    }

    let regForm = document.getElementById("registerForm");
    regForm.addEventListener('submit',
        function(event) {
            event.preventDefault();
        }
    );

    regForm.addEventListener('submit', addStudent);
}



