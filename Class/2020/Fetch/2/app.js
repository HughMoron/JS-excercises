document.getElementById("button1").addEventListener("click", getText)

document.getElementById("button2").addEventListener("click", getJson)

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