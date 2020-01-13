// FINAL RESULT

let pts1;
let pts2;
let pts3;
let count = 0;

let finalResult = (pts1 + pts2 + pts3) / count



// Question 1


// Question 2
//const correctQ2 = document.getElementById("correct2").innerText;

function chck2() {
    //console.log(document.querySelector("input.correct").checked)
    if (document.querySelector("input.correct").checked) {
        pts2 = 1
    } else {
        pts2 = 0
    }
    count += 1
}

chck2()

//Question 3
let select = document.querySelector("select")
//newArr = Array.from(select.children);
select.addEventListener("change", chck3)
//let listLanguages = document.querySelectorAll("")


function chck3(event) {
    console.log(event.target.value)
    if (event.target.value == 2) {
        pts3 = 1;
    } else {
        pts3 = 0;
    }
console.log(pts3)
}

// Resultpage
document.querySelector('.getResult').addEventListener('click', getRslt);

function getRslt(e) {
    document.querySelector(".result").innerHTML = finalResult;
    document.querySelector(".result").style.display = "block";
    document.querySelector('.getResult').innerText = "You have:";
}


//TEST AREA
//console.log(count)
//console.log(pts1)
//console.log(pts2)

//console.log(finalResult)