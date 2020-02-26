// 2020 START
document.body.style.color = "grey";
let strt = (name) => `Have a good new year 2020 ${name}!<br>`;
document.write(strt("peter"));

//BIRTHDAY CHALLENGE
let brthdy = (yr = new Date().getFullYear(), brth = 1990) => `The age is ${yr-brth}.<br>`;
document.write(brthdy());

//PETNAME CHALLENGE
let person1 = {
    name: "Ali",
    age: 10,
    gender: "d",
    countryOfOrigin: "Brazil",
}

let petName = (person) => (person.age < 15) ? `Hi A.<br>` : `Hi B.<br>`;
document.write(petName(person1));

//FAVOURITE DISH
//////////////////////////
// VARIABLES AND OBJECTS
guest1 = {name: "Ali", favDish:"kebab"};
guest2 = {name: "Bli", favDish:"pizza"};
guest3 = {name: "Cli", favDish:"pasta"};

let guests = [guest1,guest2,guest3];
let dishes =  ["hamburger","pizza","pasta"]

//STYLING THE DOM
const li = document.createElement("li");
li.className = "collection-item";

const ul = document.createElement("ul");
ul.className = "collection";
ul.appendChild(li);

//FUNCTION
let happy = (arrOfDishes,arrOfGuests)=>{
    let noLuck = [];
for(i=0; i<arrOfGuests.length; i++){
    for(j=0; j<arrOfDishes.length; j++){
        (arrOfGuests[i].favDish===arrOfDishes[j])?
        document.write(`${arrOfGuests[i].name}, we do have your Meal.<br>`):noLuck.push(arrOfGuests[i]);  
        (noLuck.filter(x => x == arrOfGuests[i]).length>2)?document.write( `${arrOfGuests[i].name}, we do NOT have your Meal.<br>`):"";
}
}
console.log(noLuck)
}
document.write(happy(dishes,guests));


















