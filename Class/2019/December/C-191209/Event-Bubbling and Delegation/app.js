// EVENT BUBBLING
/*
let span = document.querySelector(".card-title")
let div = document.querySelector(".card-content")
let divSecond = document.querySelector(".card")
let divThird = document.querySelector(".col")

span.onclick = () => console.log("Child")
div.onclick = () => console.log("Parent")
divSecond.onclick = () => console.log("Grand Parent")
divThird.onclick = () => console.log("Greater Grand Parent")
*/


// SMALL CHALLENGE
let ul = document.querySelector(".collection")
let lItem = document.querySelector(".collection-item")

//console.log(lItem.closest(".collection-item"))

ul.onclick = (a) => {
   
    let target = event.target.closest(".collection-item,.collection");

    if(!ul.contains(target)) return;

    if(target.className == "collection-item"){
        
    }
    // document.querySelectorAll(".collection-item").forEach(function (item) {
        
    //     item.style.backgroundColor = "red";

    //     item.onclick = (e) => {           
    //             e.target.closest(".collection-item").style.backgroundColor = "green";         
    //     }
    // })
   
}