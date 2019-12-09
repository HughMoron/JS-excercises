let input = document.querySelector("#textinput");

let textarea = document.querySelector("textarea");

let button = document.querySelector("#clear");

input.onkeydown = displayInfo;
input.onkeyup = displayInfo;
input.onclick = (e)=> {e.target.value = "";}
button.onclick = clearText;

function displayInfo(e){
    //e.target.value = ""
    textarea.value += `${e.type} key=${e.key} code=${e.code}
    `
}

function clearText(e){
textarea.value = "";
input.value = "";
input.focus();
}

