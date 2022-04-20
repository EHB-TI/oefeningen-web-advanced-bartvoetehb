'use strict'

const form = document.getElementById('getAgeForm');

function checkAge(event) {
    event.preventDefault();
    let age = form.age.value
    let message = (age >= 18) ? "Welcome" : `Sorry, ${age} is to young, this is a 18+ website`
    console.log(message)
    alert(message)
}

function firstLetterUp(text) {
    return (!text || text.length === 0 ) ? 
                    text : text.charAt(0).toUpperCase() + text.slice(1)
}

function lettersUp(text) {
    //first implementation
    /*
    text = text.trim();
    let parts = text.split(" ");

    for (let p in parts) {
        parts[p] = firstLetterUp(parts[p])
    }
    */
    //more fun implementation
    return text.trim()
            .split(" ")
            .map(firstLetterUp)
            .join(" ")
}

function longest(countries) {
    /*
    let biggest = ""
    for (let c in countries) {
        let country = countries[c].trim()
        let csize = country.length
        if(csize > biggest.length) {
            biggest = country
        }
    }
    return biggest
    */

   //more fun implementation
   return countries.reduce(function (a,b) {
       return a.trim().length > b.trim().length ? a : b
   }).trim()
}

const monthsInYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function printDate(date) {
    let monthInYear = monthsInYear[date.getMonth()];
    console.log(date.getDate() + ' ' + monthInYear + ' ' + date.getFullYear());
}

function printToday() {
    printDate(new Date())
}

function calculateDaysUntilAniversary(birthDay) {
    let today = new Date()
    let aniversary = new Date(birthDay.getTime())
    
    aniversary.setFullYear(today.getFullYear())
    if (aniversary < today ) {
        aniversary.setFullYear(today.getFullYear() + 1)
    }
    
    let diff =   Math.abs(aniversary.getTime() - today.getTime())
    return Math.ceil(diff / (1000 * 60 * 60 * 24))
}


console.log(firstLetterUp("hello"))
console.log(firstLetterUp(""))

let name1 = 'mike derycke'
let name2 = '   max power    '
let name3 = ' judas de verrader'

console.log(lettersUp(name1))
console.log(lettersUp(name2))
console.log(lettersUp(name3))


console.log("Javascript is the main focus of Web Essentials".replace("Essentials","Advanced"))
form.addEventListener('submit', checkAge);

console.log(longest(["Belgie", "Nederland", "Zuid-Korea","Frankrijk"]))

printToday()
let birthday = new Date(1974, 11, 11)
printDate(birthday)

console.log(calculateDaysUntilAniversary(birthday))
console.log(calculateDaysUntilAniversary(new Date(1974, 2, 2)))

