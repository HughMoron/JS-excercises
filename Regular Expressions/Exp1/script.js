////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////
// REG EXP
///////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

document.write("REGULAR EXPRESSIONS 1 <br><br> ")

////////////////////////////////////////////////////////////////////////
// EXCERCISE 1/////////////////////////////////
/////////////////////////////////////////777///////seven///////////7////

let re;

re = /hello/;
re = /hello/i; // i = case sensitive

// console.log(re);
// console.log(re.source);


// EXEC 

// exec() - return result in an array or null
// const result = re.exec('world KrhElLowprl');
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);
// console.log(result.groups);


// TEST

// const result = re.test(`Hellow`);
// console.log(result);


// MATCH 

// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);



///////////////////
// SMALL EXERCISE
///////////////////

// let arrival = "late";
// let str = [`Today nobody came very late, we should be happy!`, 'Hello World'];
//  arrival = /late/i;


// function arrvl(str,re){
//     if (re.test(str))
//     {
//         return `${re} is inside of "${str}"`;
//     } 
// }

// console.log(arrvl(str,arrival))



//// SEARCH - Returns Index of the first Match, if not found - it returns "-1"
// re = /late/i;
// const str = "Please Don't be late."
// const result = str.search(re);
// console.log(result)



//// REPLACE
// const str = "Hello There";
// const newStr = str.replace(re,"Hi");
// console.log(newStr);
// console.log(str);


/// REPLACE CHALLENGE
let start;
start = /9.05/i;
const arrival = "You need to be in class at " + 9.05 +".";
let change = 9.15;
const newStart = arrival.replace(start, change);

console.log(arrival);
console.log(newStart);





























































































