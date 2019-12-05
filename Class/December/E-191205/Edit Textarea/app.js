let div = document.querySelector(".view");
let textarea = document.createElement("textarea");

//document.body.addEventListener("click", blurIt);
div.addEventListener("click", textArea);

function textArea(e){   
    textarea.style.border = "4px solid blue";
    textarea.style.width = "450px";
    textarea.style.height = "200px";
    textarea.innerText = "Hello Guys ..."
    textarea.style.fontFamily = "inherit";
    textarea.style.fontSize = "inherit";
    e.target.replaceWith(textarea);
    textarea.focus();
}

textarea.addEventListener("blur", function(u){
    div.innerHTML = u.target.value
    u.target.replaceWith(div);
})
// function unclick (u){
    //     div.innerHTML = u.target.value
    //     u.target.replaceWith(div);
    // }