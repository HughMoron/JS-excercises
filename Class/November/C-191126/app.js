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

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(s){
   // document.querySelector('.clear-tasks')
   s.target.classList.remove('black');
   s.target.style.backgroundColor = "red";
    s.preventDefault();
}
  













