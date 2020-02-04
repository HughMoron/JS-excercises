//HTTP REQUEST
class EasyHTTP {
    //Make an HTTP request
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }
}


const http = new EasyHTTP;

//Get User
http.get(`https://api.github.com/users/5`)
    .then(val => {
        let div = document.createElement("div");
        div.classList = "container"
        document.body.appendChild(div);
        let img = document.createElement("img");
        img.src = val.avatar_url
        div.appendChild(img)
        let ul = document.createElement("ul")
        ul.classList = "card border"
    }
        
        )
    .catch(er => console.log(er))
