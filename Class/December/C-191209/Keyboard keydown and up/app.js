//VARIABLES
let input = document.querySelector("#textinput");
let textarea = document.querySelector("textarea");
let button = document.querySelector("#clear");
let keydownPrevent = document.querySelector("#keydown")
let keydownIgnore = document.querySelector("#keydown2")
//console.log(keydownIgnore)

//FUNCTIONS
input.onkeydown = displayInfo;
input.onkeyup = displayInfo;
input.onclick = (e) => {
    e.target.value = "";
};
input.onblur = (e) => {
    e.target.value = "Press keys here"
};
button.onclick = () => {
    textarea.value = "";
    input.value = "";
    textarea.value = "";
    input.focus();
};


function displayInfo(e) {
    if (keydownPrevent.checked) {
        e.preventDefault()
    }
    if (e.type == "keydown") {
        if (e.key !== "Shift" || "Control" || "Alt") {
            textarea.value += `${e.type} key=${e.key} code=${e.code} \n`
        }
        else if (keydownIgnore.checked){
            textarea.preventDefault();
        }        
        else {
            textarea.value += `${e.type} key=${e.key} code=${e.code} ${e.key}key\n`
        } 
    } 
    else if (e.type == "keyup") {
        textarea.value += `${e.type} key=${e.key} code=${e.code}\n ${new Array(50).join("-")}\n`
    }
}