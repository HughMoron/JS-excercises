/////////////////////////////////////
/// Light Bulp Challenge
/////////////////////////////////////

let bulp = document.getElementById("bulp");

bulp.addEventListener("mousedown", lightsOn);
bulp.addEventListener("mouseup", lightsOn);

function lightsOn(e) {
    console.log(e.type)
    if (e.type == "mousedown") {
        bulp.src = "bulbon.gif"
    } else {
        bulp.src = "bulboff.gif";
    }
}