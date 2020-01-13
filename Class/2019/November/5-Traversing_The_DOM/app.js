/*let val;

const list = document.querySelector(`ul.collection`);

const listItem = document.querySelector(`li.collection-item:first-child`);

val = list;
val = listItem;

//Get Child Node
val= list.childNodes
// val= list.childNodes[0];
// val= list.childNodes[1].nodeName;
// val= list.childNodes[0].nodeType;


function chckText () {
    let rslt =[];    
for (i=0; i<list.childNodes.length; i++){
console.log(list.childNodes[i].nodeType)
    if (list.childNodes[i].nodeType===3){
        list.childNodes[i].innerHTML = `<p style="color:#f0a0b9; background-color: blue;">Hello World</p>`;
    }
    else {
        list.childNodes[i].innerHTML = `<p style="color:#ccc; background-color: blue;">Hello World</p>`;
    }
}
}

chckText(list)



let list = document.querySelector(`ul.collection`);
console.log(list.children);
let arr = Array.from(list.children);
let count = 0;

    arr.forEach((element) => {
        if (element.style.color == "red"){
            element.innerText = "Done!!"
            count += 1
        }
        return count;
    }); 

console.log(count)
*/

let arrTasks = ["Do", "let", "eat", "pray", "love"];
let arrLi = ["Li1","Li2","Li3","Li4","Li5"];

// (() => {
//     for (j=0; j< arrLi.length; j++){
//         arrLi[j] = document.createElement('li'); 
//         arrLi[j].className = 'collection-item ';
//         arrLi[j].appendChild(document.createTextNode(arrTasks[j]))
//         arrLi[j].innerHTML = '<a class="delete-item secondary-content"><i class="fa fa-remove"></i></a>';        
//         document.querySelector('ul.collection').appendChild(arrLi[j]);
               
// }
// })();

arrTasks.forEach(function(item,index){
    let li = document.createElement('li'); 
        li.className = 'collection-item ';
        li.innerHTML = item+'<a class="delete-item secondary-content"><i class="fa fa-remove"></i></a>';        
        document.querySelector('ul.collection').appendChild(li);
})


















