const posts = [{
        title: "Post one",
        body: "This is the amazing post one."
    },
    {
        title: "Post two",
        body: "This is the amazing post two."
    }
]

// // Synchronized Callback Function
// function createPost(post){
//     setTimeout(()=>{
//         posts.push(post);
//     }, 2000);
// }

// function getPosts(){
//     setTimeout(()=>{
//         let output = "";
//         posts.forEach((item)=>{
//             output += `<li>${item.body}</li>`
//         });
//         document.body.innerHTML = output
//     }, 2001)//<--- if longer than "14" it will be posted, else the LIs are created before the post gets pushed to the posts.
// }

// let p1 = {title: "Post three", body:"This is the amazing post three."};

// createPost(p1);

// getPosts();


//////////////////////
// CALLBACK FUNCTION
//////////////////////
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback()
    }, 2000);
}

function getPosts() {
    setTimeout(() => {
        let output = "";
        posts.forEach((item) => {
            output += `<li>${item.body}</li>`
        });
        document.body.innerHTML = output
    }, 1000)
}

let p1 = {title: "Post three", body:"This is the amazing post three."};

createPost(p1,getPosts)