//Greeting Function 

function greeting(greetWord1, name1) {
    return `${greetWord1} ${name1}, how are you?`
}

document.write(greeting("Hi", "Saf1") + "<br></br>")


// Find the rabbit
function findTheRabbit(text, phrase) {
    return text.match(phrase).length 
}

let text2 = "The rabbit was rabbit jumping all the time"
let phrase2 = /rabbit/ig
const num2 = findTheRabbit(text2, phrase2)

document.write(findTheRabbit(text2, phrase2))