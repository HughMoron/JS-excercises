// Math 
/*
const num1 = 100;
const num2 = 50;
let val;

//Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// console.log(val);

//Math Object
val = Math.PI;
val = Math.E;
console.log(val);
val = Math.round(2.5);
val = Math.ceil(2.009);
val = Math.floor(2.99999);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8,10); // 8Hoch10
val = Math.min(2,33,4,1,55,6,3,-2);
val = Math.max(2,33,4,1,55,6,3,-2);
val = Math.random();
val = Math.floor(Math.random() * 20 + 1)
console.log(val);*/


//////////////////////////////////////////////////////////////////////
//LOTTERY FUNCTION
//////////////////////////////////////////////////////////////////////
/*function lottery(num) {
    
    let luckyNumber = Math.floor(Math.random() * 100 + 1)
    console.log(` The lucky number is ${luckyNumber}`)
    let diff = Math.abs(luckyNumber - num)

    if (num === luckyNumber) {
        return 100
    } else if (diff <= 10) {
        return 100-diff*10
    } else {
        return "Sorry! please try again."
    }

}

let winnings = 0;

for (i=0; i<10; i++){
winnings += lottery(48)
document.write(winnings + "<br>")
}
*/