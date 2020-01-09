// PARTY PEOPLE

//Guestlist
let guest1 = {name: "Ali", age: 21};
let guest2 = {name: "Bli", age: 12};
let guest3 = {name: "Cli", age: 19};
let guest4 = {name: "Dli", age: 16};
let guest5 = {name: "Eli", age: 48};

let listGuest = [guest1,guest2,guest3,guest4,guest5];
let listOk = [];
let listNo = [];

let restrictionAge = 18;

//VARIABLES
let ul = document.createElement("ul");


//Invitation Function

let youAreFine = (guestlist,age)=>{
    
    guestlist.forEach((element,index) => {
    if(element.age>=age){
        //listOk.push(element);
        (document.createElement("li")).appendChild(document.createTextNode(`Invited Guest ${element.name}`));
        ul.appendChild("li")
    }
    else {
        //listNo.push(element)
        (document.createElement("li")).appendChild(document.createTextNode(`Not Invited Guest ${element.name}`));

    }

});
console.log(listOk)
console.log(listNo)
}

youAreFine(listGuest,restrictionAge);












