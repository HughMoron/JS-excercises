let user = {
    name: "Ali",
    password: "1234",
}

let user2 = {
    role: "guest",
    authorities: ['read'],
    __proto__ : user,
}

let user3 = {
    role: "admin",
    __proto__ : user2,
    addProps: function(){
        user3.authorities.push("add", "delete");
        this.role? delete this.__proto__.role : this.role=user2.role 
    },
}



user3.addProps()

console.log(user3)