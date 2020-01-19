// Animal Leg Challenge

let animal1 = {
    name: "horse",
    legs: 4,
    sound: "yeehaw",
    tail: true,
    cntLegs: function() {
        document.write(`The ${this.name} has ${this.legs} legs.<br>`)
        return `The ${this.name} has ${this.legs} legs.<br>`
    }
};

let animal2 = {
    name: "centipede",
    legs: 100,
    sound: "ssss",
    tail: false,
    cntLegs: function () {
        document.write(`The ${this.name} on the other hand has ${this.legs} legs.<br>`)
    }
}

animal1.cntLegs();
animal2["cntLegs"]();

if ( )
