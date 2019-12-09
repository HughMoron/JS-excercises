// onEvent = some javascript code

const bulb = document.getElementById(`myImage`);

bulb.onmouseover = lighton;
bulb.onmouseout = lightoff;

function lightoff() {
    bulb.src = "bulboff.gif"
}

function lighton() {
    bulb.src = "bulbon.gif"
}