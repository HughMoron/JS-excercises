////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////
// MENTORING 191108
///////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

document.write("MENTORING 191108<br><br>")

////////////////////////////////////////////////////////////////////////
// WeIrD StRiNg CaSe /////////////////////////////////
/////////////////////////////////////////777///////seven///////////7////

let string = 'This is a test';

function toWeirdCase (str){
let arr = str.split(" ");
let weird = [];
for (i=0; i<arr.length; i++){
    for (j=0; j<arr[i].length; j++){
    if (j%2 === 0){
     weird.push(arr[i][j].toUpperCase())
     weird.join("") 
    }
    else {weird.push(arr[i][j])
        weird.join("")
    }
    
}    
}
arr.join("")
return arr
}
console.log(toWeirdCase(string))




// These is a test
// 


















































































