////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////
// MENTORING 190927
///////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
// EXCERCISE 1/////////////////////////////////
/////////////////////////////////////////777///////seven///////////7////
let cty1 = {
    name: "Aburg",
    population: 800000,
    continent: "Arope",
    advice: "positive"
}
let cty2 = {
    name: "Bburg",
    population: 1800000,
    continent: "Brope",
    advice: "negative"
}
let cty3 = {
    name: "Cburg",
    population: 2800000,
    continent: "Crope",
    advice: "positive"
}
let cty4 = {
    name: "Dburg",
    population: 80000,
    continent: "Drope",
    advice: "negative"
}
// ARR
let ctyS = [cty1, cty2, cty3, cty4]

// FUNCTION
function chckAdviceCity(info) {
    return `${info.name} has a population of ${info.population} and is located in ${info.continent}.`
}
document.write("<br><br>/////////////////////////////////EXCERCISE 1 /////////////////////////////////<br>");
document.write(chckAdviceCity(cty1))




////////////////////////////////////////////////////////////////////////
//CHALLENGE 1 /////////////////////////////////
////////////////////////////////////////////////////////////////////////
function chckCity(arrOfCities) {
    let temp = arrOfCities[0];
    for (i = 0; i < arrOfCities.length; i++) {
        if (arrOfCities[i].population < temp.population) {
            temp = arrOfCities[i]
        }
    }
    return `You definitely should go to ${temp.name}. It is the smalles city in our Portfolio.`
}

document.write("<br><br>/////////////////////////////////CHALLENGE 1 /////////////////////////////////<br>");
document.write(chckCity(ctyS))

////////////////////////////////////////////////////////////////////////
//CHALLENGE 2 /////////////////////////////////
////////////////////////////////////////////////////////////////////////

// ARR
let prfrncs = [1800000, "Crope"]

// FUNCTION
/*function tripAdviser(arrOfCities, arrOfPreferences) {
    for (i = 0; i < arrOfCities.length; i++) {
        for (j=0; j<arrOfPreferences.length; j++){
            if (arrOfPreferences[j] == arrOfCities[i].[k] 
                && arrOfPreferences[i+] == arrOfCities[i].[k]){
                    return "This result matches your criterias."
                }
        }
    }
    // let j = 0;
    // for (i = 0; i < arrOfCities.length; i++) {
    //         if (arrOfCities[i].includes(arrOfPreferences[j])) {
    //             document.write("OK")
    //     }
    //     else {
    //         document.write("Not OK")
    //     }
    // }
}*/
document.write("<br><br>/////////////////////////////////CHALLENGE 2 /////////////////////////////////<br>");
document.write("TBA.")

////////////////////////////////////////////////////////////////////////
//CHALLENGE 3 /////////////////////////////////
////////////////////////////////////////////////////////////////////////




document.write("<br><br>/////////////////////////////////CHALLENGE 3 /////////////////////////////////<br>");



















