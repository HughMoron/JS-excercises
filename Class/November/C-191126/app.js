////////////////////////////////////////////
/// C-191126
////////////////////////////////////////////

////////////////////////////////////////////
/// Set-Attribute Challenge
////////////////////////////////////////////
/*
let link = document.querySelectorAll("li");

console.log(link[1]);

Array.from(link).forEach(function (item) {
    if (item.innerText == "done") {
        item.children[0].setAttribute('href', 'http://google.com')
        item.firstElementChild.setAttribute("style", "color: red; text-align: center; font-family: arial;")
    }
});
*/

////////////////////////////////////////////
/// On-Click Challenge
////////////////////////////////////////////
/*
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(s){
   // document.querySelector('.clear-tasks')
   s.target.classList.remove('black');
   s.target.style.backgroundColor = "red";
    s.preventDefault();
}
*/

////////////////////////////////////////////
/// Button Challenge
////////////////////////////////////////////
/*
let button = document.createElement("button");
let h4 = document.createElement("h4");
let div = document.createElement("div");
button.setAttribute('type',"button");
button.setAttribute('class','btn btn-outline-secondary');
button.style.color = "white";
button.innerText = "Click me";
button.classList.add("btn-outline-primary");

document.body.appendChild(div);
document.querySelector("div").appendChild(button);
document.querySelector("div").appendChild(h4);

div.style.alignItems = "center";

// ADDED EVENT
document.querySelector('button').addEventListener('click', onClick);

function onClick (s) {
    h4.innerText = "Test worked!";
    h4.style.fontFamily = "helvetica";
    s.preventDefault();
    button.style.backgroundColor = "orange";
}
*/

////////////////////////////////////////////
/// REMOVE Challenge
////////////////////////////////////////////

let elementsArray = document.querySelectorAll("i");

elementsArray.forEach(function(item) {
    item.addEventListener("click", (s) => {
        item.parentElement.parentElement.remove();
        s.preventDefault();
    }
       );
});




