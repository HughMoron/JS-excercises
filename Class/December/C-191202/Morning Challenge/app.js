

// get the element

let firstDiv = document.getElementById("fDiv");


// make its background red
firstDiv.style.background = "red";
firstDiv.style.color = "white";

// also there is a global variable namend by an id that references the element


// sDiv is a reference to DOM-Element with the ID = "sDiv"
sDiv.style.background = "blue";
sDiv.style.color = "white";
sDiv.style.marginBottom = "1rem";
// ^this is not recommended. But you will still find it in older code.


// That's unless we declare a JavaScript variable with the same name. Then it takes precendence.

//let sDiv = 5; // Now sDiv is "5", not a referenceto <div id="sDiv">

//console.log(sDiv)

table.style.margin = "auto";
table.style.border = "1px solid black";
table.style.marginBottom = "1rem";

thFN.style.background = "orange";
thFN.style.color = "white";

thLN.style.background = "orange";
thLN.style.color = "white";

thNN.style.background = "orange";
thNN.style.color = "white";

td1.style.background = "lightgrey";
td1.style.border = "1px solid black";



//Create the Table
let table2 = document.createElement ("table");
table2.style.margin = "auto";
table2.style.marginBottom = "1rem";
table2.style.textAlign = "center";
table2.style.width = "15rem";
table2.style.border = "2px solid grey";
table2.style.fontFamily = "arial";
table2.style.padding = "0.2rem";
table2.style.boxShadow = "2px 2px 8px black";

elem.appendChild(table2);

//Create the Rows
let tr1 = document.createElement ("tr");
let tr2 = document.createElement ("tr");
let tr3 = document.createElement ("tr");

let arrTr = [tr1,tr2,tr3];

arrTr.forEach(function(item){
table2.appendChild(item);
})


//Create the Columns
let thJS1 = [];
let tdJS1 = [];
let tdJS2 = [];

for (i=0; i<3; i++){
    thJS1[i] = document.createElement ("th");
    thJS1[i].id = `TH-${i}`;
    thJS1[i].innerText = `TH-${i}`;
    thJS1[i].style.background = "green";
    thJS1[i].style.color = "white";
    thJS1[i].style.padding = "0.5rem";
    thJS1[i].style.border = "2px solid black";

    tdJS1[i] = document.createElement ("td");
    tdJS1[i].id = `TR1-${i}`;
    tdJS1[i].innerText = `TR1-${i}`;
    tdJS1[i].style.background = "grey";
    tdJS1[i].style.color = "white";
    tdJS1[i].style.padding = "0.3rem";

    tdJS2[i] = document.createElement ("td");
    tdJS2[i].id = `TR2-${i}`;
    tdJS2[i].innerText = `TR2-${i}`;
    tdJS2[i].style.background = "orange";
    tdJS2[i].style.color = "white";
    tdJS2[i].style.padding = "0.3rem";

}

// console.log(thJS1)
// console.log(tdJS1)
// console.log(tdJS2)

thJS1.forEach(function(item){
    tr1.appendChild(item);
})

tdJS1.forEach(function(item){
    tr2.appendChild(item);
})

tdJS2.forEach(function(item){
    tr3.appendChild(item);
})


































