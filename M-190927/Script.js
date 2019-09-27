////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////
// MENTORING 190927
///////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// EXCERCISE 1/////////////////////////////////
let cty1 = {name: "Aburg", population: 800000, continent: "Arope", advice:"positive"}
let cty2 = {name: "Bburg", population: 1800000, continent: "Brope", advice:"negative"}
let cty3 = {name: "Cburg", population: 2800000, continent: "Crope", advice:"positive"}
let cty4 = {name: "Dburg", population: 80000, continent: "Drope", advice:"negative"}

let ctyS = [cty1,cty2,cty3,cty4]

// document.write(cty1.advice);

function chckAdviceCity (info) {
return `${info.name} has a population of ${info.population} and is located in ${info.continent}.`
}

document.write(chckAdviceCity(cty1))

document.write("<br><br>");

//CHALLENGE 1 /////////////////////////////////

function chckCity (arrOfCities){
    let advc = Math.min.apply(Math,arrOfCities[i].name)

    return `You definitely should go to ${arrOfCities[i].name}. It is the smalles city in our Portfolio.`
}

document.write(chckCity(ctyS))