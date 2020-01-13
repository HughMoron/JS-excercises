///////////////////////////////////////////////
//// C-191105
///////////////////////////////////////////////


document.write("C-191105")

//////////////////////////////////////////////////////////
// IS IT WEEKEND?
//////////////////////////////////////////////////////////
/*
let today = new Date();


function isItAWeekend (day){
let result = (day.getDay() === 0 || day.getDay() === 6 )? "It's a weekend!" : "Keep your head up, almost weekend!";
console.log("Hi World")
return result

}

console.log(isItAWeekend(today))
*/
//////////////////////////////////////////////////////////
// COLORDAY
//////////////////////////////////////////////////////////
/*
let today = new Date("11-06-2019");
let colorDay = ["red", "blue", "green", "yellow", "black", "white", "grey"];

console.log(today)
switch (today.getDay()) {
    case 0:
        console.log(colorDay[today.getDay()]);
        break;
    case 1:
        console.log(colorDay[today.getDay()]);
        break;
    case 2:
        console.log(colorDay[today.getDay()]);
        break;
    case 3:
        console.log(colorDay[today.getDay()]);
        break;
    case 4:
        console.log(colorDay[today.getDay()]);
        break;
    case 5:
        console.log(colorDay[today.getDay()]);
        break;
    case 6:
        console.log(colorDay[today.getDay()]);
}
*/

//////////////////////////////////////////////////////////
// forEach
//////////////////////////////////////////////////////////
/*
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


(function (arr) {
    let newArr = [];
    arr.forEach(function (item) {
        newArr.push(item*item)
    })
    console.log(newArr);
})(num)
*/

//////////////////////////////////////////////////////////
// toDo-List
//////////////////////////////////////////////////////////
/*
const toDo = {
list: [],
adrod: function (item) {
    this.list.push(item)
},
edit: function (id) {
    console.log(`Edit todo ${id}.`)
}
}

toDo.adrod(`Eat`)
toDo.edit()
*/

//////////////////////////////////////////////////////////
// Container Problem
//////////////////////////////////////////////////////////

let capShip = 1000;
let Containers = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 50, 50, 50, 50, 50, 100, 100, 100, 100, 100, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500];

function containerCalc() {
    let loaded = [];
    let shipWeight = 0;
    for (i = 0; i < Containers.length; i++) {
        if ((shipWeight) <= capShip) {
            shipWeight += Containers[i]
            loaded.push(Containers[i]);
            if (shipWeight > capShip) {
                shipWeight = shipWeight - loaded[loaded.length - 1]
                loaded.pop(loaded)
            }
        }

    }
    return `The amount of containers is: ${loaded.length}, the loaded containers weight ${shipWeight}kg, the ship has a capacity of ${capShip}kg, so the free available weight is: ${capShip-shipWeight}kg.`
}
console.log(containerCalc())