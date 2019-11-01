////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////
// MENTORING 191101
///////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

document.write("MENTORING 191101<br><br>")

////////////////////////////////////////////////////////////////////////
// DHL Package Challenge /////////////////////////////////
/////////////////////////////////////////777///////seven///////////7////
document.write("DHL Package Challenge<br><br>")

let order = 64;
let unit = "kg"
let orderMin = 7;
let dividerS = 2;
let dividerL = 5;

function countPckg(num) {
    if (num >= 7) {


        
        if (num % dividerL == 0) {
            return `You need ${num/dividerL} packages of ${dividerL}${unit} for ${num}${unit}.`
        } else if (num % dividerL != 0 && (num % dividerL) % dividerS == 0) {
            return `You need ${Math.floor(num/dividerL)} packages of ${dividerL}${unit} and ${(num % dividerL)/dividerS} packages of ${dividerS}${unit} for ${num}${unit}.`
        } else if (num % dividerL != 0 && (num % dividerL) % dividerS != 0) {
            return `You need ${Math.floor((num/dividerL)-1)} packages of ${dividerL}${unit} and ${((num - ((Math.floor(num/dividerL)-1)*dividerL))/dividerS)} packages of ${dividerS}${unit} for ${num}${unit}.`
        } else if (num % dividerS == 0) {
            return `You need ${num/dividerS} packages of ${dividerS}${unit} for ${num}${unit}.`
        } else {
            let rmdS = (num % dividerL) % 2
            return rmdS
        }




    } else {
        return `Sorry the minimum volume for your order is ${orderMin}${unit}.`
    }
}

document.write(countPckg(order))