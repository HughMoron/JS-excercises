// Body Font
let bdy = document.querySelector('body')
bdy.style.fontFamily = "arial";

// Center Text of h1
document.querySelector('.title').style.textAlign = "center";

// Change Color and Font-Style of Headings

let headlinesCategory = document.getElementsByClassName('category');
headlinesCategory = Array.from(headlinesCategory)

headlinesCategory.forEach(item => {
    item.style.fontFamily = "Times New Roman";
    item.style.color = "purple";
});

// Random Color Creator
let numRandom1;
let numRandom2;
let numRandom3;
let alpha;

function rndmColor(){
    numRandom1 = (Math.floor((Math.random() * 255) + 1));
    numRandom2 = (Math.floor((Math.random() * 255) + 1));
    numRandom3 = (Math.floor((Math.random() * 255) + 1));
    alpha = (Math.random()).toFixed(2);
    return `rgba(${numRandom1},${numRandom2},${numRandom3},${alpha})`
}

// Styling UL with random color
let ulRandomBG = document.getElementsByClassName('food-category');
ulRandomBG = Array.from(ulRandomBG);
ulRandomBG.forEach((item) => {
    item.style.backgroundColor = rndmColor();
item.style.width = "80%";
item.style.padding = "2rem";
item.style.margin = "1rem";
});
 
// Align Items + Responsive
document.querySelector('.main').style.display = "flex";
document.querySelector('.main').style.justifyContent = "space-between";

// Warning
document.getElementById('warning').style.fontSize = "1.5rem";
document.getElementById('warning').style.fontStyle = "italic";
document.getElementById('warning').style.fontFamily = "verdana";
document.getElementById('warning').style.textAlign = "center";

// Give all even Allergy-Warnings differen Background
let allrgyWrng = document.getElementsByClassName('allergy-info');
allrgyWrng = Array.from(allrgyWrng);


allrgyWrng.forEach((item,index)=>{
    item.style.listStyleType = "none";
    item.style.paddingLeft = "8px";
    if (index % 2 == 0){
        item.style.backgroundColor = "blue";       
    }
})

// Make the allergy-warning appear as a column in the center of the page

document.querySelector('.allergy-warning').style.display = "flex";
document.querySelector('.allergy-warning').style.flexDirection = "column";
document.querySelector('.allergy-warning').style.margin ="auto";
document.querySelector('.allergy-warning').style.width = "50%";

// Styling the Footer
let footer = document.getElementsByClassName('food-desc')
footer = Array.from(footer);
document.querySelector('.footer').style.display = "flex";
document.querySelector('.footer').style.justifyContent = "center";

footer.forEach((item)=>{
    item.style.border = "5px solid orange";
    item.style.borderRadius = "50px";
item.style.margin = "1rem";
item.style.padding = "15px";
item.style.width = "59px";
item.style.height = "59px";
item.style.fontSize = "12px";
item.style.paddingTop = "25px";
item.style.textAlign = "center";
})

console.log()
 
