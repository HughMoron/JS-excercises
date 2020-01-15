// ARROW FUNCTION

// let x = (a, b) => {
//     let result = a;
//     if (b == 0) return 1

//     for (i = 1; i < b; i++) result *= a

//     return result;
// };

// let sayHi = ()=> console.log("Hi!")
// sayHi();

// res = x(9,4)
// console.log(res)


// FRUIT FUNCTION

// let fruits = ["Apple","Banana","Date","Kiwi"];

// console.log(fruits.map(item => {if(item == "Banana"){return item} }))


// fruitPicker = (array,item) => { 
// for (x of array){x===item? item : ""}
// };

// console.log(fruitPicker(fruits,"Banana"))

let people = ["Kumar", "Harris", "Asmari", "Navide", "Jijish", "Julain"]

console.log(people.map(person => person == "Julian"? "German Name":"Indian Name"))