document.querySelector(".getWAI").addEventListener(`click`, getDetails);

function getDetails(e) {
    const iUsername = document.querySelector(`input[type="text"]`).value;
    // console.log(username);
    const xhr = new XMLHttpRequest();

    xhr.open(`GET`, "users.json", true);

    xhr.onload = function () {
        let output = ""
        
        if (this.username === iUsername) {
            // let response = JSON.parse(this.responseText);
            output =
                `<ul>
            <li>${this.nameFirst}</li>;
            <li>${this.nameLast}</li>;
            <li>${this.numPhone}</li>;`
        } else {
            output = `<li>Something went wrong</li>`
        }
        document.querySelector(".details").innerHTML = output;
        // console.log(response)
    }
    xhr.send()

e.preventDefault();
}