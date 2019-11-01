////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////
// MENTORING 191101
///////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

document.write("MENTORING 191101<br><br>")

////////////////////////////////////////////////////////////////////////
// DHL Package Challenge /////////////////////////////////
/////////////////////////////////////////777///////seven///////////7////
document.write("Test Results revisit<br><br>")




let rsltPassed = [67, 82, 91, 96, 54]
let rsltMissed = [46, 48, 24, 33, 30]

function unifyArr (arr1,arr2){
let rsltUnited = [];
rsltUnited = arr1.concat(arr2);
let sum = 0;

for (i=0; i<rsltUnited.length; i++){
    sum += rsltUnited[i]
}

document.write( `The Results "${rsltUnited}" have an average of: <br><br>${sum/rsltUnited.length}.<br>`)
rsltUnited.push(50);
console.log(rsltUnited);
let highscore = Math.max(...rsltUnited);
return `<br>the highscore this time is ${highscore}.`
}

document.write(unifyArr(rsltPassed,rsltMissed))

















































































