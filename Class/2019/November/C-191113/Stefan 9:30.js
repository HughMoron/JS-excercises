///////////////////////////////////////////////////////////////////////////
///////////// C-191113
///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
///////////// Morning Challenge
///////////////////////////////////////////////////////////////////////////
/*
let numMobile = 999999999;
let dayBirth = 13111990;
let priceInitial = 39;
let priceSilver = 50;
let priceGolden = 100;
let pricePlatinum = 200;

let re1 = /\d/ig;
let re2 = /13111990/i;
let re3 = /\d{9}/;

function chckPrice(num, price1, price2, price3, price4, date) {
    if (num.test(re3)) {
        return `The total is: ${price1+price3}`
    }
    if (num.match(re2)) {
        return `The total is: ${price1+price4}`
    }
    if (num.test(re1)) {
        return `The total is: ${price1+price2}`
    }
}

document.write(chckPrice(numMobile, priceInitial, priceSilver, priceGolden, pricePlatinum, dayBirth))
*/

let val;
