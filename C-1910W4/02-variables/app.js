//Greeting Function 

function greeting (greetWord1,name1){
return `${greetWord1} ${name1}, how are you?`
}

document.write(greeting("Hi","Saf1")+"<br></br>")


// Find the rabbit
function findTheRabbit (text, phrase){
let arr = []
    if (text.match(phrase)){
        arr.push(phrase)
    }
    return arr.length
    
}

let text2 = "The rabbit was jumping all the time"
let phrase2 = "rabbit"
const num2 = findTheRabbit (text2, phrase2)

document.write(findTheRabbit(text2, phrase2))