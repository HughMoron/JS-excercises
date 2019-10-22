////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////
// EXAM 191022
///////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

document.write("EXAM 191022 STEFAN M.<br><br> ")
console.log(("EXAM 191022 STEFAN M."))

let sheep = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];

function countSheeps (arrayOfSheep){
return `There are ${arrayOfSheep.filter(x => x).length} sheeps in total.`;
}


document.write(countSheeps(sheep));
console.log(countSheeps(sheep));
























































































