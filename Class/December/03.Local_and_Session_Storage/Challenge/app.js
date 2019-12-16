// let key = "Name"
// let value = "Ali"
let person = {
    Name: "Ali",
    Age: 25,
    CoO: "Syria"
};


function setItem(key, value) {
    localStorage.setItem(key, value)
}

function removeItem(key) {
    localStorage.removeItem(key)
}

function clearItems() {
    localStorage.clear()
}

for (apple in person) {
    clearItems()
    if (person[apple] =="Syria") {
        setItem(apple, person[apple])
     } 
        

}

console.log(localStorage.getItem(person["CoO"]))

document.write(localStorage.getItem(person["Syria"]));