//////////////////////////////////////////////////////////
// C-191106
//////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////
document.write("Good Morgning Challenge<br><br>")
//////////////////////////////////////////////////////////////////////////
/*
let time = new Date("2019-11-06 9:00")

console.log(time.getHours())

function greeting (time){
let greeting = (time.getHours() >= 4 && time.getHours()< 11)? "Good Morning!" : (time.getHours() >= 11 && time.getHours()< 17)? "Hello!" : (time.getHours() >= 17 && time.getHours()< 22)? "Good afternoon!" : (time.getHours() >= 22 && time.getHours()< 4) ? "Good night!":"What is wrong with you!?";
return greeting;
}

console.log(greeting(time))
*/


//////////////////////////////////////////////////////////////////////////
document.write("ID Challenge")
//////////////////////////////////////////////////////////////////////////
/*
let p1 = {id: 1, name: "Ali"}
let p2 = {id: 2, name: "Bli"}
let p3 = {id: 3, name: "Cli"}
let p4 = {id: 4, name: "Dli"}
let p5 = {id: 5, name: "Eli"}
let p6 = {id: 6, name: "Fli"}
let persons = [p1, p2, p3, p4, p5, p6]

let rslt = [];
xyz = persons.forEach(function(item){
     if (item.id % 2 == 0){ 
     rslt.push(item.name)
     return rslt;    
    }
})
console.log(rslt)
*/

//////////////////////////////////////////////////////////////////////////
document.write("L-8 Pay the employees today")
//////////////////////////////////////////////////////////////////////////

let employees = 72;
let balance = 100000;
let emplArr = [];

emplArr.push({jobdes: "DataAnalyst", payment: 7500})
emplArr.push({jobdes: "MachLrnEng", payment: 10000})

for (i = 2; i < 4; i++) {emplArr.push({jobdes: "Fullstack", payment: 3000})}
for (i = 4; i < 8; i++) {emplArr.push({jobdes: "Backend", payment: 2000})}
for (i = 8; i < 12; i++) {emplArr.push({jobdes: "Frontend", payment: 1500})}
for (i = 12; i < 62; i++) {emplArr.push({jobdes: "Worker", payment: 1000})}
for (i = 62; i < 67; i++) {emplArr.push({jobdes: "DevOpsEng", payment: 5000})}
for (i = 67; i < 72; i++) {emplArr.push({jobdes: "ProjMan", payment: 4000})}

// ADDING ID TO THE ARRAY
for (i=0; i<emplArr.length; i++){
emplArr[i].id = (i+1);
}

//FUNCTION
function payMe() {
    let paid = [];
    let spendings = 0;
    for (i = 0; i < emplArr.length; i++) {
        if (spendings <= balance) {
            spendings += emplArr[i].payment
            paid.push(emplArr[i].jobdes);
            while (spendings > balance){
                spendings -= paid[paid.length - 1].payment
                paid.pop(paid)
            }
        }

    }
    return `The amount of employees paid is: ${paid.length}, the salaries spent are ${spendings}$, the balance is ${balance}$, so the free available money is: ${balance-spendings}$.`
}
console.log(payMe())