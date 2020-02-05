// let x = JSON.parse(`{"id":0, "name":"Mostafa"}`);
// console.log(x);

// let y = {
//     name:"object",
//     age: 21
// }

// let z = JSON.stringify(y);
// console.log(z)

/////////////////
// Doesn't work here because of the position of the script link in the HTML
// Put it in the function => window.onload will make it work.
/////////////////
// let div = document.getElementById("someDiv");
// div.innerHTML= "sdfsdf"


window.onload = () => {
    let div = document.getElementById("someDiv");
    // div.innerHTML = "sdfsdf"
    console.log("Document was loaded")
}

function showUsers() {
    let xhr = new XMLHttpRequest();
    // console.log(Object.keys(xhr))
    xhr.open("GET", "users.json", )
    xhr.send();
    let p = document.createElement("p");
    // p.id = "status";
    p.innerHTML = "Processing...";
    xhr.onprogress = () => {
        document.body.appendChild(p)
    }

    xhr.onreadystatechange = function () {
        switch (this.readyState == 0) {

            case 1:
                p.innerHTML = "connection established"
                break;
            case 2:
                p.innerHTML = "Request received"
                break;
            case 3:
                p.innerHTML = "processing request"
                break;
            case 4:
                let response = this.responseText
                console.log(response)
                break;
            default:
                p.innerHTML = "Request not initialized"
                break;
        }
    }
}