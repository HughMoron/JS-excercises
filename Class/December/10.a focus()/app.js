///////////////////////////////////////
/// .focus()
///////////////////////////////////////

let arr = Array.from(document.querySelectorAll("input"))

const btnTry = document.getElementById("try");
btnTry.addEventListener(`click`, focusMethod);

let count = 0;

function focusMethod(){
    if(count>2){
        count=0;
    }
   arr[count].focus();
   arr.forEach(function(item){
    item.style.backgroundColor = "white";
})
   arr[count].style.backgroundColor = "yellow";
count++;
}

