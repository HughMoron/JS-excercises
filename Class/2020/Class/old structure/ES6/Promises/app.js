// let promise = new Promise( (resolve, reject) =>{
//     // the function is executed automatically when the promise is constructed
//     setTimeout(() => resolve("done"), 1000)
//     // setTimeout(() => reject(new Error("God Damn!")), 1000)

// })

// // resolve runs the first function in .then
// promise.then(
//     result => alert(result), //shows "done" after one second(1000ms)
//     error => alert(error)
// )

// console.log(promise)

const posts = [{
    title: "Post One",
    body: "This is Post One"
}, {
    title: "Post Two",
    body: "This is Post Two"
}];

let createPost = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = true;
            !error ? resolve() : reject("Error: something went wrong!")
        }, 2000)
    })
}

let getPosts = () => {
    setTimeout(() => {
        let output = ``
        posts.forEach(item => output += `<li>${item.title}</li>`)
        document.body.innerHTML = output;
    },1000)
}

createPost({title: "Post Three", body: "This is Post Three"}).then(getPosts).catch((err)=>{console.log(err)})