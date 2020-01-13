let input = document.querySelector("input");

input.addEventListener("focus",changeBckgrnd);
input.addEventListener("blur",changeBckgrnd2);

function changeBckgrnd(e){
    console.log(e.type)
    if (e.target.focus){
            e.target.style.background = "yellow";
        }
        // else {
        //     e.target.style.background = "";
        // }

// if (e.type == "focus"){
//     e.target.style.background = "yellow";
// }
// else {
//     e.target.style.background = "";
// }
}

function changeBckgrnd2(e){
    e.target.style.background = "";
}