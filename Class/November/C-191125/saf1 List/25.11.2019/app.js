////////////////////////////////////////////
/// C-191125
////////////////////////////////////////////

////////////////////////////////////////////
/// Styling List
////////////////////////////////////////////

const div = document.createElement(`div`);
const ul = document.createElement(`ul`);
const h2 = document.createElement(`h2`);
h2.innerText = "HelvetiList"
let lis = ["Zurich","Geneva","Winterthur","Lausanne","Lucerne"];

document.body.appendChild(div);
div.appendChild(h2);
div.appendChild(ul);


lis.forEach(function(item){
    document.querySelector('ul').appendChild(document.createElement(`li`)).innerHTML =`<a href="#">${item}</a>`;
});