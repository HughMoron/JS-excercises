////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////
// REG EXP 2
///////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

document.write("REGULAR EXPRESSIONS 2<br><br> ")

////////////////////////////////////////////////////////////////////////
///////////////////////////////////
/////////////////////////////////////////777///////seven///////////7////

let re;
// Literal Characters
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; // Must start with!
re = /d'$/i; // Must end with!
re = /^d$/ 
re = /gre?a?\?y/i;
re = /[A-Za-zäöü]rey/;
//
//
//
re = /[0-9][0-9]ray/; // two digits after each other

// Curly Braces {} - Quantifiers
re = /Hel{3}o/i;            // Must occur exactly {m} at this position
re = /Hel{2,4}o/i;          // Must occur at least m and maximum n times at this position; {m,n}
re = /Hel{2,}o/i;           // Must occur at least m times at this position;


// Parentheses () - Grouping 
re = /^([0-9]x){3}$/i;

// Shorthand Character Classes
re = /\w/;                  // Word character - alphanumeric or _
re = /\w+/;                 // + means one or more
re = /\W/;                  // Non-Word Character
re = /\d/;                  // = [0-9] digit character
re = /\D/;                  // Non digit character
re = /\s/;                  // Match whitespace character or TAB
re = /\S/;                  // Match non-whitespace character
re = /\bHell\b/i;           // Word boundary - non word character at its specific position


// Assertions
re = /x(?=y)/i;             // Match x only if followed by y
re = /x(?!y)/i;             // Match x if not followed by y




// String to match
const str = "xray";            

//Log Results
const result = re.exec(str);
console.log(result)

function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re,str)


///////////////////////////////////////////////////
//// LUNCH BREAK FUNCTION
// function lunchBreak(){
//     console.log("now")
// }

// lunchBreak();


////////////////////////////////////////////////////////////////////////
///////////////////////////////////
/////////////////////////////////////////777///////seven///////////7////


let re = /[a-z]{2,10}/ig;

