//ARE YOU FREE CHALLENGE
let monday = {shift1:"busy",shift2:"free"};
let tuesday = {shift1:"free",shift2:"busy"};
let wednesday = {shift1:"busy",shift2:"free"};
let thursday = {shift1:"free",shift2:"busy"};
let friday = {shift1:"busy",shift2:"free"};
let week = [monday, tuesday, wednesday, thursday, friday];

//DOM-STYLING
let monS1 = document.getElementById("shift1-monday").innerHTML = monday.shift1;
let tueS1 = document.getElementById("shift1-tuesday").innerHTML = tuesday.shift1;
let wedS1 = document.getElementById("shift1-wednesday").innerHTML = wednesday.shift1;
let thuS1 = document.getElementById("shift1-thursday").innerHTML = thursday.shift1;
let friS1 = document.getElementById("shift1-friday").innerHTML = friday.shift1;
let monS2 = document.getElementById("shift2-monday").innerHTML = monday.shift2;
let tueS2 = document.getElementById("shift2-tuesday").innerHTML = tuesday.shift2;
let wedS2 = document.getElementById("shift2-wednesday").innerHTML = wednesday.shift2;
let thuS2 = document.getElementById("shift2-thursday").innerHTML = thursday.shift2;
let friS2 = document.getElementById("shift2-friday").innerHTML = friday.shift2;




//FUNCTION
function chckFreeTime(){
for (element of week){
    if (element){}
}
};

chckFreeTime();
