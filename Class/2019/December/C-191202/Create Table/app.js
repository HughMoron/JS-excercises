// CREATE TABLE

function createTable() {
    //body reference
    const body = document.querySelector("body");

    //create elemnts <table> and <tbody>
    const tb1 = document.createElement("table");
    const tb1Body = document.createElement("tbody");
    tb1.style.textAlign = "center";
    tb1.style.border = "4px solid black";
    tb1.style.margin = "auto";

    
    //cells creation
    for (let i = 0; i <= 3; i++) {
        //    table row creation
        const row = document.createElement("tr");
        //styling the cells:

        if (i==0){
            row.style.fontSize = "1.2rem";
            row.style.background = "orange";
            row.style.color = "green";
        }
        else if (i%2 == 0){
            row.style.background = "grey";
            row.style.color = "white";
        }

        ////////
        for (let j = 0; j < 3; j++) {
            //create element <td> and Text-Node
            //make the text node as the content of <td>
            //put
            const cell = document.createElement("td");
            const cellText = document.createTextNode(`cell is row ${i}, and column ${j}.`);
            cell.id=(i+""+j)
            cell.appendChild(cellText);
            row.appendChild(cell);
            if(j%2!=0 && i!=0){
                cell.style.background = "red";
                cell.style.color = "black";
            }
        } tb1Body.appendChild(row);
    }
    //append the <tbody> inside the <table>
    tb1.appendChild(tb1Body);
    //put the <table> insdie the <body>
    body.appendChild(tb1)
    //adding tb1 border attribute
    tb1.setAttribute("border","4");
}

const table = createTable();
// let cell00 = document.getElementById("00");
// //let cell00 = document.getElementById("00");
// cell00.innerText = "First Name";

 
// EACH CELL
let arrTR = Array.from(document.querySelectorAll("tr"))
for (i=0;i<arrTR.length; i++){
    for (j=0;j<arrTR[i].children.length; j++){
        arrTR[i].children[j].style.fontFamily = "arial";
        arrTR[i].children[j].style.background = get_random_color()
        arrTR[i].children[j].style.color = "orange";
        arrTR[i].children[j].style.border = "1px solid black";
        arrTR[i].children[j].innerText = `This is No${ij}`;
}
}

// RANDOM COLOR CREATOR
function get_random_color() 
{
    var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;
}

get_random_color()
































