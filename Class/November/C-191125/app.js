////////////////////////////////////////////
/// C-191125
////////////////////////////////////////////

////////////////////////////////////////////
/// Good Morning Challenge
////////////////////////////////////////////

function createUL() {
    const ul = document.createElement("ul");
    ul.className = "list-group";
    document.body.appendChild(ul); // Usually "query selector" if not <body> || <head> 

    let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    arrNum.forEach(function (item, index) {
        if (item % 2 === 0) {
            const li = document.createElement(`li`);
            li.className = "list-group-item";
            li.appendChild(document.createTextNode(`Index ${index}: "Item: ${item} square = ${item*item}!"`));
            document.querySelector("ul").appendChild(li)
            if (item % 4 === 0) {
                li.className = "list-group-item-warning list-group-item-action tab-pane"
            } else {
                li.className = "list-group-item-info"
            }
        }
    })
}


createUL()