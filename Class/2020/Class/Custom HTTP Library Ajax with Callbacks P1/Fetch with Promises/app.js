const http = new EasyHTTP;

//Get Use
http.get(`https://api.github.com/users`)
    .then(val => console.log(val))
    .catch(er => console.log(er))

const user = {
    name: "Mr. Harris",
    username: "Bomberman",
    email: "h.2000@gmail.com"
}

//Post User
http.post("https://jsonplaceholder.typicode.com/users", user)
    .then((val) => {
        console.log(val)
    })
    .catch(err => console.log(err))

// Update single User on Server
http.put(`https://jsonplaceholder.typicode.com/users`, user)
    .then(val => console.log(val))
    .catch(er => console.log(er))

//Delete User
http.delete("https://jsonplaceholder.typicode.com/users/7")
    .then(val => console.log(val))
    .catch(er => console.log(er))