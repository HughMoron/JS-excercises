// class Person {
//     constructor(firstName, lastName) {
//         this.fName = firstName;
//         this.lName = lastName;
//     }
//     greeting() {
//         return `Hello there ${this.fName} ${this.lName}.<br>`;
//     }
// }

// class Customer extends Person {
//     constructor(cFirstName, cLastName, phoneN, memberShip){
//         super(cFirstName, cLastName)
//         this.phone = phoneN
//         this.membership = memberShip
//     }
//     giveMembershipCost(cost){
//         this.memcost = cost
//     }
// }

// let c1 = new Customer("Harris","Riaz","555-5555","standard")

// console.log(c1)


/////////////////////////77
// Property Class -> with Location(str) & Size(num) || subclass extra property => owner and price
//////////////////////////

class Property {
    constructor (location, size){
        this.lctn = location;
        this.sz = size;
    }
}

class Flat extends Property {
    constructor (location, size, owner, price){
        super(location,size);
        this.ownr = owner;
        this.prc = price
    }
    calcPrice(){
        return `The total buying price of this Object from ${this.ownr} in ${this.lctn} is ${this.prc * this.sz}€.`;
    }
}

let result = new Flat ("Hamburg", 65, "Saga",22000)
document.write(result.calcPrice())

// class Clinic  [property1,property]