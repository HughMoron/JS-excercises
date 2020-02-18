//Async/Await: Special Syntax to work with
//The word "async" before a function returns always a promise
//Values are wrapped in a resolved promise automatically
//Doesn't work with arrow functions

//ASYNC
// async function sampleFunc(){
//     // return Promise.resolve(`Hello February`)
//     return `February`
// }

// console.log(sampleFunc())
// sampleFunc().then(val=> console.log(val))
//So async ensures that the function returns a promise and wraps its returned value into the resolved value


//AWAIT
//There is another keyword: AWAIT, that works only inside async functions.
//The keyword await makes JS wait until that promise settles and returns its result.

// async function myTest(){
//     let promise = new Promise((resolve,reject) => { 
//     setTimeout(()=> resolve("done!"), 2000)
//     });
// let result = await promise;
// alert(result); //"done!"
// }

// myTest()

//await literally makes JS wait until the promise gets executed and then go with the result. 

//that doesn't cost any CPU resources, because the engine can do other jobs in the meantime: execute other scripts, handle events, etc.

// async function myTest(){
//     let promise = new Promise((resolve,reject) => { 
//     setTimeout(()=> resolve("done!"), 2000)
//     });
//     const error = false;
//     if(!error){
//         const res = await promise; // wait until promise is resolved
//         return res
//     }else{
//         await Promise.reject(new Error("Something went wrong"))
//     }
// }

// myTest()
// .then(val => console.log(val))

async function getUsers(){
    //await response of the fetch call
    const response = await fetch('https://api.github.com/users')
    //Only proceed once its resolved
    const data = await response.json()

    //Only proceed once the second promise is resolved
    return data
}

getUsers().then(users => console.log(users)) 













