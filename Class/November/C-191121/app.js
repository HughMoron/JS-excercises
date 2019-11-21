/////////////////////////////////////////////
//////////// C-191121
/////////////////////////////////////////////

/////////////////////////////////////////////
//////////// The Guessing Game
/////////////////////////////////////////////
let max = 10;
let tries = 3;
let numRndm = Math.floor(Math.random() * (max +1));
console.log(numRndm);

function guessingGame () {
    
    let numTrial = prompt("Can you guess the number?", "Put in a number between 1-10");
    
    let count=1;
    
    if (numRndm == numTrial){
        let win = alert(`SUCCESS!!! the number was ${numRndm} and you needed only ${count} try-outs.`);
        return win 
    }
    while(numTrial !== numRndm && count < tries){
        count += 1;
        alert(`Nope, sorry! Try again! You have ${tries+1-count} try-outs.`);
        numTrial = prompt("Can you guess the number?", "Put in a number");
    if (numTrial == null){
        break
    }
    if (numRndm == numTrial){
        let win = alert(`SUCCESS!!! the number was ${numRndm} and you needed only ${count} try-outs.`);
        return win 
    }
    }    
} 











