//add export before declaration
// let greeting = "welcome back"

// function hi(user){
//     return `${greeting} ${user} in Javascript Module.`
// }

// // add export after declaration
// export{greeting,hi}

// add export before declaration
// export function sqr(num) {return num*num}

// DEFAULT
// export default function sqr(num) {
//     return num * num
// }

// USERS
export {
    createUL,
    addUser,
    deleteUser,
    modifyUser
}
////////////////////////////////////////
let user;
let div = document.getElementById("ul")
let count = 0;
/////////////////////////////////////////
document.getElementById("delete").addEventListener("click",deleteUser)

document.getElementById("addUser").addEventListener("click",addUser)


document.getElementById("modifyUser").addEventListener("click",modifyUser)

/////////////////////////////////////////
function createUL() {
    let ul = document.createElement("ul")
    ul.id = "userList"
    div.appendChild(ul)
}

function addUser(userName) {
    let li = document.createElement("li")
    count ++
    li.classList= `li ${count}`;
    li.innerHTML = `User ${count}`
ul.appendChild(li)
return count
}

function deleteUser() {

let arrLi = document.querySelectorAll(".li")

arrLi[arrLi.length-1].remove()
}

function modifyUser() {
    let arrLi = Array.from(document.querySelectorAll(".li"))
    console.log(arrLi)
    arrLi.forEach((item)=>{
        console.log(item)
        item.style.color = "rgb(Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1))"
    })
}