document.getElementById("button1").addEventListener("click", getText)

document.getElementById("button2").addEventListener("click", getJson)

document.getElementById("button3").addEventListener("click", getApi)

console.log(window.fetch)

//get local text file data
function getText() {
    fetch(`local.txt`)
        .then(
            (res) => {
                return res.text()
            }
        )
        .then(
            (data) => {
                console.log(data)
                document.getElementById(`output`).innerHTML += data
            }
        )
        .catch(
            (problem) => {
                console.log(problem)
                document.getElementById(`output`).innerHTML += problem
            }
        )
}

//get local JSON file data
function getJson() {
    fetch(`local.json`)
        .then(
            (res) => {
                return res.json()
            }
        )
        .then(
            (data) => {
                // data = JSON.parse(data) //No need for Parse in Fetch, but for AJAX!!
                //console.log(typeof data)
                let output = "";
                data.forEach(item => {
                    output += `<li>${item.title}</li>`                    
                });
                document.getElementById(`output`).innerHTML = output
            }
        )
        .catch(
            (problem) => {
                console.log(problem)
                document.getElementById(`output`).innerHTML += problem
            }
        )
}

//get data from api
function getApi() {
    fetch(`https://api.github.com/users`)
        .then(
            (res) => {
                return res.json()
            }
        )
        .then(
            (data) => {
                // data = JSON.parse(data) //No need for Parse in Fetch, but for AJAX!!
                //console.log(typeof data)
                let output = "";
                data.forEach(item => {
                    output += `<li>${item.login}</li>`                    
                });
                document.getElementById(`output`).innerHTML = output
            }
        )

        //Only the Server can change the promise status into rejected.

        .catch(
            (problem) => {
                console.log(problem)
                document.getElementById(`output`).innerHTML += problem
            }
        )
}