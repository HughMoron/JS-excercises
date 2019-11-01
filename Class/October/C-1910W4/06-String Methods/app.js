let str = "Hello Safwan Safwan Safwan"

//....

//substring()
val = str.substring(0,4);
console.log(val);


//slice
val = str.slice(0,4);
console.log(val);

val = str.slice(-4);
console.log(val);


//split
val = str.split(" ");

console.log(val);

//Function Count
str = "Hello Safwan, this Safwan is Safwan"
let name = "Safwan";

function countMyName (str,name){
    arrWords = str.split(" ");
    console.log(arrWords);
    let count = 0;
    for (i=0; i<arrWords.length; i++){
        if (arrWords[i].includes(name)){
            count ++;
        }
    }
    return count
}

document.write(countMyName(str,name))

//includes()




















