function Student(){
    this.name = "Maria"
    this.gender = "Female"
}

let stdOne = new Student ();
// console.log(stdOne);
// stdOne.age=15;
Student.prototype.age=15;
Student.prototype.cOO="Germany"
let stdTwo = new Student ();
console.log(stdOne);
console.log(stdTwo);
//Prototype is invisible property of an object.
//It returns prototype object of a function to which it links to.
