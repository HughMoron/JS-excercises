//VARIABLES
let input = document.querySelector("#textinput");
let textarea = document.querySelector("textarea");
let button = document.querySelector("#clear");
let keydownPrevent = document.querySelector("#keydown");
let keydownIgnore = document.querySelector("#keydown2");
let keyupIgnore = document.querySelector("#keyup2");
let lastTime = Date.now();

//ONE-LINE-FUNCTIONS
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

//EVENTHANDLER FUNCTION
function displayInfo(e) {
    if (keydownIgnore.checked || keyupIgnore.checked) {return};
    
    if (keydownPrevent.checked) {
        e.preventDefault()
    }
    if (e.type == "keydown") {
        
        if (e.key !== "Shift" || "Control" || "Alt") {
            textarea.value += `${e.type} key=${e.key} code=${e.code} \n`
        } 
        
        else {
            textarea.value += `${e.type} key=${e.key} code=${e.code} ${e.key}key\n`
        } 
    } 
    else if (e.type == "keyup") {
        textarea.value += `${e.type} key=${e.key} code=${e.code}\n` 
    }
    if(e.type == "keyup" && Date.now()-lastTime >250){
        textarea.value += new Array(50).join("-")+"\n"
    }
}