'use strict'

const form = document.getElementById('getAgeForm');

function checkAge(event) {
    event.preventDefault();
    let age = form.age.value
    let message = (age >= 18) ? "Welcome" : `Sorry, ${age} is to young, this is a 18+ website`
    console.log(message)
    alert(message)
}

form.addEventListener('submit', checkAge);