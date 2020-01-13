// Person Challenge

let person1 = {
    name: "Ali",
    countryOfOrigin: "Syria",
    dateOfBirth: new Date ('5-11-1990'), 
    chckAge: function(){
        return `${this.name} is ${(new Date().getFullYear()) - (this.dateOfBirth.getFullYear())} years old.` 
    }
}

document.write(person1.chckAge())
console.log(new Date().getFullYear())
console.log(person1.dateOfBirth )