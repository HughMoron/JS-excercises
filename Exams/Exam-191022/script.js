////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////
// EXAM 191022
///////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

document.write("EXAM 191022 STEFAN M.<br><br> ")
console.log(("EXAM 191022 STEFAN M."))


///////////////////////////////////////////////
// COUNTING SHEEPS
///////////////////////////////////////////////


let sheep = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];

function countSheeps (arrayOfSheep){
return `There are ${arrayOfSheep.filter(x => x).length} sheeps in total.`;
}


document.write(countSheeps(sheep)+"<br>");
console.log(countSheeps(sheep)+"<br>");



///////////////////////////////////////////////
// REMOVE SMALLEST NUMBER
///////////////////////////////////////////////

function removeSmallest(numbers) {
    let temp = []
    let min = numbers[0];
    for (i = 0; i < numbers.length; i++) {
      if (numbers[i] < min) {
       min = numbers[i];
      }
    }
    for (j = 0; j < numbers.length; j++) {
      if (j !== numbers.indexOf(min)) {
        temp.push(numbers[j]);
      }
    }
    return temp;
   }
   document.write(removeSmallest([5, 0,3, 2, 1, 4,0])+"<br>");





///////////////////////////////////////////////
// MONEY MONEY MONEY
///////////////////////////////////////////////

function calculateYears (principal, interest, tax,desired){
    let y = 0;
    let arr = [];
    for (y=0; principal<=desired; y++ ){
    principalinterest = principal*interest
    taxOnInterest = principal*interest*tax;
        principal += principalinterest - taxOnInterest;
    }
    return `The principal will go to ${principal} after ${y} years and surpass ${desired}.`
}
document.write(calculateYears(1000, 0.05, 0.18, 1100))



















































































