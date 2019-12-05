let first = document.getElementById("1");
let second = document.getElementById("2");
let third = document.getElementById("3");
let elemenT = document.querySelector(".result");

let plus = document.querySelector(".plus");

document.querySelector(".plus").addEventListener("click", calcSqr);
document.querySelector(".minus").addEventListener("click", calcSqr);
document.querySelector(".divided").addEventListener("click", calcSqr);
document.querySelector(".multiply").addEventListener("click", calcSqr);

function calcSqr(e){
if (e.target.innerText === "/"){
   let result = (first.value / second.value);
    elemenT.insertAdjacentHTML("beforeend", `Those numbers divided is: ${result}<br>`)
}
else if (e.target.innerText === "*"){
    let result = (parseFloat(first.value) * parseFloat(second.value));
     elemenT.insertAdjacentHTML("beforeend", `Those numbers multiplied is: ${result}<br>`)
 }
 else if (e.target.innerText === "-"){
    let result = (first.value - second.value);
     elemenT.insertAdjacentHTML("beforeend", `Those numbers substracted is: ${result}<br>`)
 }
 else if (e.target.innerText === "+"){
    let result = (parseFloat(first.value) + parseFloat(second.value));
     elemenT.insertAdjacentHTML("beforeend", `Those numbers added is: ${result}<br>`)
 }
}
