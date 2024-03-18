const MIN = 1
const MAX = 100
let useranswer;

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function displayFunction(msg) {
    if (msg){
        alert(msg)
    }
}

const answer = Number(randomIntFromInterval(MIN, MAX))
const min_range = answer - 10, max_range = answer + 10
let attempt = 0
let running = true

while (running){
    useranswer = Number(window.prompt(`Enter a number between ${MIN} and ${MAX}`))
    
    if (isNaN(useranswer)){
        displayFunction('Please enter only integer between range')
    }
    
    if (useranswer < MIN || useranswer > MAX){
        displayFunction(`Please enter number only between ${MIN} and ${MAX}`)
    }else if(useranswer != answer && (useranswer > min_range && useranswer < max_range)){
        displayFunction('Oops! You are getting close')
        attempt += 1
    }else if(useranswer != answer){
        displayFunction('Please try again!')
        attempt += 1
    }else{
        displayFunction(`Correct! The random number is ${answer} and you attempts is ${attempt}time`)
        running = false
    }
}