let x = 3;
let y = 5;

function sumXY() {
    let sum = (x < y) ? "That's true" : "Not really";
    return sum
}

console.log(sumXY())
document.write(sumXY() + `<br>`)

//////////////////////////////////////////////////////////////////////
function visitCity(nameCity) {
    if (nameCity === `Hamburg`) {
        return `I've been to ${nameCity}, it's beautiful.`
    } else {
        return `I've never been there, is ${nameCity} any good?`
    }
}
document.write(visitCity(`Hamburg`) + `<br>`)

////////////////////////////////////////////////////////////////////////

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
document.write(beenThere(citiesVisited, `London`));