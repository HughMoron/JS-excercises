document.querySelector(`.get-jokes`).addEventListener(`click`, getJokes);

function getJokes(e) {
    const number = document.querySelector(`input[type="number"]`).value;

    const xhr = new XMLHttpRequest();

    xhr.open(`GET`, `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            let response = JSON.parse(this.responseText);
            let output = "";
            if (response.type === "success") {
                // let divCard = document.createElement("div")
                // let ul = document.createElement("ul");
                // divCard.className = "card";
                // ul.className = "list-group";
                response.value.forEach(item => {
                    
                    
                    output += `<li class="list-group-item">${item.joke}</li>`
                });
                
            } else {
                output += `<li class="list-group-item">Something went wrong</li>`
            }
            document.querySelector(".jokes").innerHTML = output;
            console.log(response)
        }
}

xhr.send()

e.preventDefault();
}