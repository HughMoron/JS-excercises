 // TYPE CONVERSION

let val;
let par;

//Number to string
val = true;
par = String(val)

//String to number
val = "555";
par = Number(val);

//Boolean to number
val = true;
par = Number(val);

//Special String to number
val = "5ive";
par = Number(val);

//array to number
val = [1,2,3];
par = Number(val);

//Parse Int & Parse Float
val = "555,543";
par = parseInt(val);
par = parseFloat(val);

/*
//Output
console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(par);
console.log(typeof par);
//console.log(par.length);
//console.log( par == val )
console.log(par.toFixed(3));
*/

//NaN Concept
function checkNaN(x){
    if (isNaN(x)){
        return NaN;
    }
    return x;
}

console.log(checkNaN('1'))
// expected Output: "1"
console.log(checkNaN("Hello"))
// expected Output: NaN
























