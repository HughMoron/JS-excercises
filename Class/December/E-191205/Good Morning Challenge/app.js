////////////////////
/// Good morning Challenge
////////////////////

let button1 = document.querySelector(".buttonF");
let button2 = document.querySelector(".buttonB");
let input = document.getElementById("textinput");
let p = document.querySelector(".switch");

button1.addEventListener("click", blurFocus);
button2.addEventListener("click", blurFocus);

function blurFocus(e) {

    if (e.target.innerText == "Focus") {
        input.focus();
       // p.insertAdjacentHTML("beforeEnd", "on Focus");
        p.innerHTML = "on Focus"
    }

    if (e.target.innerText == "Blur") {
        input.blur();
       // p.insertAdjacentHTML("beforeEnd", "on Blur");
        //p.replace(/on Focus/,"on Blur");
        p.innerHTML = "on Blur"
    }
}
