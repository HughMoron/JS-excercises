let cartoon = document.querySelector(".cartoon");
console.log(cartoon)
cartoon.addEventListener("click",moveIT);

function moveIT(e){
    if(e.target.focus())
    console.log("Done")
}

