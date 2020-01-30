const http = new EasyHTTP;

//Get Use
http.get(`https://api.github.com/users`)
.then(val => console.log(val))
.catch(er => console.log(er))