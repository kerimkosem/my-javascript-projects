
let days_DOM = document.getElementById("days")
let hours_DOM = document.getElementById("hours")
let minutes_DOM = document.getElementById("minutes")
let seconds_DOM = document.getElementById("seconds")

let newYear = "01 Jan 2023"

function countdown() {

        let currentDate = new Date()
        let nextYear = new Date(newYear)

        let total = (nextYear - currentDate) / 1000;

        let days = Math.floor(total / 3600 / 24) 
        let hours = Math.floor((total / 3600) % 24) 
        let minutes = Math.floor((total / 60) % 60) 
        let seconds = Math.floor(total % 60) 


        days_DOM.innerHTML = days
        hours_DOM.innerHTML = hours
        minutes_DOM.innerHTML = minutes
        seconds_DOM.innerHTML = seconds

}

countdown();

setInterval(countdown, 1000)