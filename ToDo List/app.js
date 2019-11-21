let val ;
val = document;
val = document.all;
val = document.links;
val = document.links[0].classList;
val = document.scripts[2].getAttribute("src");

let scripts = document.scripts;

let scriptsArr = Array.from(scripts)

scriptsArr.forEach(function(item){
    console.log(item.getAttribute("src"))
});




console.log(scriptsArr)