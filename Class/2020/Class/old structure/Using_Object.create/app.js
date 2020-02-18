let animal = {
    eats: true,
    doesEat: function(){
        return this.eats
    }
}

//CREATE Object
let rabbit = Object.create(animal, {longEars:{value:2},jumps:{value: true}})
//Alternative:
// let rabbit = Object.create(animal)
// rabbit.longEars = 2;
// rabbit.jumps = true

//Re Create our person object
// const person = {
//     firstName: "Farah",
//     lastName: "Yousef",
//     age: 25,
//     maritalStatus: "single",
//     greetings: function(){
//         return `Hello Miss ${this.firstName} ${this.lastName}.`
//     },
//     getsMarried: function (newLastName){
//         this.lastName = newLastName;
//         this.maritalStatus = "married";
//     }
// }

// const persoProtos = {
//     greetings: function(){
//         return `Hello Miss ${this.firstName} ${this.lastName}.`
//     },
//     getsMarried: function (newLastName){
//         this.lastName = newLastName;
//         this.maritalStatus = "married";
//     }
// }

// const person = Object.create(persoProtos)

// person.firstName = "Farah";
// person.lastName = "Yousef";
// person.age = 25;
// person.maritalStatus = "single";

// // person.getsMarried('Nelson')
// console.log(person)

//Change Password, modify authorities

let user = {
    name: "Ali",
    password: "1234",
    role: "User",
    authorities: ["read","share"],
}

let guest = Object.create(user)
guest.age = 367;

guest.addProps = function(){
    guest.authorities.push("add", "delete");
    this.role? delete this.__proto__.role : this.role=guest.role; 
}

console.log(guest.addProps());
