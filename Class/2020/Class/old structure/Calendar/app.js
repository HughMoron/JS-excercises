// CALENDAR 
let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let firstDay = (new Date(currentYear, currentMonth)).getDay();


let date = 1;
console.log(firstDay)


for (i = 0; i < 5; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
            let td = document.createElement("td");
            let tdText = document.createTextNode("");
            td.appendChild(tdText);
            tr.appendChild(td);
        }       
        
       else{ 
        let td = document.createElement("td");
        let tdText = document.createTextNode(date);
        td.appendChild(tdText);
        tr.appendChild(td)
        document.getElementById("body").appendChild(tr);
        date++;
    }
}
}