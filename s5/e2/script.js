

window.onload = 
async function(event) {
    let data = await fetch("data.json");
    let students = await data.json();
    console.log(students);

    let klasgroep = document.getElementById("klasgroep");
    let leerlingen = document.getElementById("leerlingen");
    
    for( let group in students) {
        console.log(group);
        let option = document.createElement("option");
        option.innerText = group;
        option.value = group;
        klasgroep.appendChild(option);
    }
    fillStudents();
    

    klasgroep.addEventListener("change", fillStudents);

    function fillStudents(event) {
        let studenten = students[klasgroep.value];
        leerlingen.innerHTML = "";
        for(let student in studenten) {
            let option = document.createElement("option");
            option.innerText = studenten[student];
            option.value = student;
            leerlingen.appendChild(option);
        }
        fillStudent();
    }

    leerlingen.addEventListener("change", fillStudent);

    function fillStudent(event) {
        let studentid = leerlingen.value;
        let name = students[klasgroep.value][leerlingen.value];
        
        document.getElementById("studid").innerText = `${name} with id ${studentid}`;
    }

};