////////////////////////////////////////////
/// C-191125
////////////////////////////////////////////

////////////////////////////////////////////
/// Styling List
////////////////////////////////////////////

// CREATING ELEMENTS AND ARRAYS
const div = document.createElement(`div`);
const ul = document.createElement(`ul`);
const h2 = document.createElement(`h2`);
h2.innerText = "HelvetiList"
let lis = ["Zurich","Geneva","Winterthur","Lausanne","Lucerne"];


// APPENDING ELEMENTS TO THE DOM
document.body.appendChild(div);
div.appendChild(h2);
div.appendChild(ul);

// STYLING WITH CLASSES
lis.forEach(function(item){
    document.querySelector('ul').appendChild(document.createElement(`li`)).innerHTML =`<a href="#">${item}</a>`;
});

document.querySelector("div").className = "div";
document.querySelector("h2").className = "h2";
document.querySelector("ul").className = "ul";

const li = Array.from( document.querySelectorAll("li"))

li.forEach(function(item){
   item.className = "li";
});

li[li.length-1].className = "li lastChild";

const a = Array.from(document.querySelectorAll("a"))

a.forEach(function(item){
    item.className = "a";
 });
