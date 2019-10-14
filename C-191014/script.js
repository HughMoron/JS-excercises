////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////
// CLASS 191014
///////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////
// TRYOUT/////////////////////////////////
/////////////////////////////////////////777///////seven///////////7////
let x = 3;
let y = 5;

function sumXY() {
    let sum = (x < y) ? "That's true." : "Not really.";
    return sum
}

console.log(sumXY())
document.write(sumXY() + `<br>` + `<br>`)


////////////////////////////////////////////////////////////////////////
// EXCERCISE 1/////////////////////////////////
/////////////////////////////////////////777///////seven///////////7////
function visitCity(nameCity) {
    if (nameCity === `Hamburg`) {
        return `I've been to ${nameCity}, it's beautiful.`
    } else {
        return `I've never been there, is ${nameCity} any good?`
    }
}
document.write(visitCity(`Hamburg`) + `<br>`)

////////////////////////////////////////////////////////////////////////
// EXCERCISE 2/////////////////////////////////
/////////////////////////////////////////777///////seven///////////7////

let citiesVisited = [`Hamburg`, `London`, `Istanbul`]
let rslt = ``;


function beenThere(arr, cty) {
    rslt = `I've never been there, is ${cty} any good?`

    for (i = 0; i < arr.length; i++) {
        if (cty === arr[i]) {
            rslt = `I've been to ${cty}, it's beautiful.`
            // break
        }
        //       else {
        //          rslt = `I've never been there, is ${cty} any good?`

        // }
    }
    return rslt;

}
document.write(beenThere(citiesVisited, `London`) + `<br>` + `<br>`);


////////////////////////////////////////////////////////////////////////
// EXCERCISE 3/////////////////////////////////
/////////////////////////////////////////777///////seven///////////7////

let ctysVisited = [`Hamburg`, `Berlin`, `London`, `Paris`];
let ctysAsked = [`Dubai`, `Paris`, `Berlin`]

function ctysMatch(arr1, arr2) {
    let temp = [];
    let temp2 = [];
    for (i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                temp.push(arr1[i])
            }
            // else {
            //     temp2.push(arr1[i])
            // }
        }
    }
    return `From the cities you asked, I've visited: ${temp}.`
    // I have not been to ${temp2}`;
}

document.write(ctysMatch(ctysAsked, ctysVisited) + `<br>`+ `<br>`)



////////////////////////////////////////////////////////////////////////
// EXCERCISE 4/////////////////////////////////
/////////////////////////////////////////777///////seven///////////7////

let a = "Apple";

function checkPlural(str) {
    if (str[str.length - 1] === "s") {
        return `The word ${str} is plural.`
    }
    else {
        return `The word ${str} is singular.`
    }
}

document.write(checkPlural(a)+ `<br>`+ `<br>`)


////////////////////////////////////////////////////////////////////////
// EXCERCISE 5/////////////////////////////////
/////////////////////////////////////////777///////seven///////////7////
bdayName = "Stefan"
guestName = "Safwan"

function checkLength(str2,str3) {
    if (str2.length === str3.length) {
        return `${str2} is invited to ${str3}'s Party.`
    }
    else {
        return `${str2} is not invited to ${str3}'s Party.`
    }
}

document.write(checkLength(bdayName,guestName)+ `<br>`+ `<br>`)



////////////////////////////////////////////////////////////////////////
// freeCodeCamp Challenge/////////////////////////////////
/////////////////////////////////////////777///////seven///////////7////
// Example
var ourStr = "I come first. " + "I come second.";

// Only change code below this line

var myStr = "This is the start. " + "This is the end.";

































