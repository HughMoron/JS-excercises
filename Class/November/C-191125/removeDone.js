////////////////////////////////////////////
/// C-191125
////////////////////////////////////////////

////////////////////////////////////////////
/// Remove "Done"
////////////////////////////////////////////


/* let newItem = document.createTextNode("Test works!")

newItem.className = "collection-item";

 oldItem = document.querySelector('.collection-item').firstChild


document.querySelector('.collection-item').replaceChild(newItem,oldItem)
*/
let arrLi = Array.from(document.querySelectorAll('.collection-item'))
console.log(arrLi[0].firstChild)

function doDone () {
    arrLi.forEach(function(item){
    if (item.textContent.includes("done")){
        item.remove()
    }
})
}

doDone()