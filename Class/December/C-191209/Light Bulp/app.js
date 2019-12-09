/////////////////////////////////////
/// Light Bulp Challenge
/////////////////////////////////////

let bulp = document.getElementById("bulp");

bulp.addEventListener("mouseover", lightsOn);
bulp.addEventListener("mouseout", lightsOn);

function lightsOn(e) {
    console.log(e.type)
    if (e.type == "mouseover") {
        e.target.src = "bulbon.gif"
    } else {
        e.target.src = "bulboff.gif";
    }
}