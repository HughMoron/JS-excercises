let animal = {
    tail: true,
    name: "tba",
    eats: true,
}

let rabbit = {
    jumps: true,
}

rabbit.__proto__.ears = 2;

rabbit.__proto__ = animal;

let longEars = {
    earlength: 10,
    __proto__: rabbit
}

console.log(longEars)
// console.log(rabbit.__proto__);
/////////////////////////////////
// function Animal(iEats){
//     this.eats = iEats;
// }
/////////////////////////////////
// let anim1 = new Animal(true)
// console.log(anim1)