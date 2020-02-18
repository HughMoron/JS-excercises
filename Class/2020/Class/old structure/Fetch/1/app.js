document.getElementById("button1").addEventListener("click", getText)

console.log(window.fetch)

//get local text file data
function getText() {
    fetch(`local1.txt`)
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