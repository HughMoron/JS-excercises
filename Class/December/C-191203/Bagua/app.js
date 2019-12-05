// Bagua Chart
let table = document.querySelector("table");

let button1 = document.createElement("button");
button1.id = "ok";
button1.innerText = "Ok";
//button1.className = "edit-controls edit-td edit-area";

let button2 = document.createElement("button");
button2.id = "cancel";
button2.innerText = "Cancel";
//button2.className = "edit-controls edit-td edit-area";

let divButton = document.createElement("div");
divButton.appendChild(button1);
divButton.appendChild(button2);
divButton.className = "edit-controls edit-td edit-area";

table.addEventListener("click", clckFct);

function clckFct(e) {
    e.target.appendChild(divButton);
    e.target.insertAdjacentElement("beforeend", divButton);
}


//////////////////////

let target = event.target.closest(".edit-cancel,.edit-ok,td");

target.addEventListener("click",finishEdit)

    // if (target.className == ".edit-cancel") {
    //     finishTdEdit();
    // } else if (target.className == ".edit-ok") {
    //     finishTdEdit();
    // } else if (target.nodeName == "TD") {
    //     makeTdEditable(target);
    // }



    function finishEdit(event) {
        if(event.target==".edit-cancel"){
            editingTD = {
                elem: td,
                data: td.innerHTML
            }
        }
        if(event.target==".edit-ok"){
            
        }
    }


































