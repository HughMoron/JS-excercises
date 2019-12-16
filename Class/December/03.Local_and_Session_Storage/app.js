// Local Storage vs Session Storage
// They are exactly the SyncManagerthe only difference:
// Local Storage keep the saved data even you close the browser and open it again
// Set local storage item
// The key and the value should be string
localStorage.setItem("name","Andri")
localStorage.setItem("name","Saf1")

localStorage.setItem("age","25")

//Set session storage item
sessionStorage.setItem("name","Harris")

//Remove from local storage
//localStorage.removeItem("name")

//Get property from local storage
const x = localStorage.getItem("name")
console.log(x)
localStorage.clear()


localStorage.removeItem("name")