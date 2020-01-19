// CLASS BASIC SYNTAX FOR DECLARATION
class User{
    //we should start with constructor
    constructor(userName, passWord){
        this.name = userName;
        this.pass = passWord;
    }
//we write the properties inside the constructor
//but we write the methods outside the constructor
changePass(newPass){
    this.pass = newPass
}
}

// USAGE
let u1 = new User("Kumaro","1234");
console.log(u1);

class Person {
constructor(firstName, lastName, doB){
    this.fName = firstName;
    this.lName = lastName;
    this.bDay = new Date(doB);
}
greeting(){
return `Hello there ${this.fName} ${this.lName}.<br>`;
}
calcAge(){
return `${this.fName} ${this.lName} is ${new Date().getFullYear() -this.bDay.getFullYear()} years old.<br>`;
}
getMarried(newLastName){
this.lName = newLastName;
return `${this.fName}'s new last Name is ${this.lName}.`
}
}

let mustafa = new Person ("Mustafa", "Othman","08-19-1987");
document.write(mustafa.greeting(),mustafa.calcAge(), mustafa.getMarried("Mercedes"))

