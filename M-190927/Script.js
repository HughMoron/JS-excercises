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
let zombieLand = {
    name: "zombieLand",
    type: 'horror',
    keywords: '"zombies", "dead", "horror"',
    topic: 'Zombieland ist eine ...'
}

let starWars = {
    name: "starWars",
    type: "sciFi",
    keywords: "'science','fiction','starWars'",
    topic: "StarWars takes place in a universe far far away...",
}

let oldSchool = {
    name: "oldSchool",
    type: 'comedy',
    keywords: "'oldschool', 'willferrell', 'college'",
    topic: 'In Oldschool three highschool friends go back to college to ...',
}

let paragraph1 = {
    title: zombieLand,
    text: "Zombieland ist eine US-amerikanische Filmkomödie aus dem Jahr 2009. Regie führte Ruben Fleischer; Rhett Reese und Paul Wernick schrieben das Drehbuch. In den Hauptrollen spielen Woody Harrelson, Jesse Eisenberg, Emma Stone und Abigail Breslin Überlebende einer Zombie-Apokalypse."
}
let paragraph2 = {
    title: starWars,
    text: "Star Wars ist ein Film-Franchise, dessen Geschichte mit dem 1977 erschienenen Kinofilm Krieg der Sterne begann. Schöpfer von Star Wars ist der Drehbuchautor, Produzent und Regisseur George Lucas",
}
let paragraph3 = {
    title: oldSchool,
    text: "Old School – Wir lassen absolut nichts anbrennen (Originaltitel: Old School) ist eine von DreamWorks im Jahre 2003 herausgebrachte Filmkomödie, die als Ursprung für die Bezeichnung Frat-Pack-Film gilt. Im Mittelpunkt stehen drei Mittdreißiger in der Midlife Crisis, die ihre Collegezeit wiederaufleben lassen wollen, indem sie eine Studentenverbindung gründen. Der Film mit Luke Wilson (Mitch), Vince Vaughn (Bernard) und Will Ferrell (Frank) wurde unter der Regie von Todd Phillips gedreht und von Phillips und Scot Armstrong geschrieben."
}

let arrOfTitles = [zombieLand, starWars, oldSchool];
let arrOfParagraphs = [paragraph1, paragraph2, paragraph3];



function storyBuilder(arr1, arr2, str) {
    for (i = 0; i < arr1.length; i++) {
        if (str == arr1[i].type) {
            for (j = 0; j < arr2.length; j++) {
                if (arr1[i] == arr2[j].title) {
                    return `The title "${arr1[i].name}" is perfect for you. Here you'll find a short intro: ${arr2[j].text}`
                }
            }
        }
    }

}

document.write("<br><br>/////////////////////////////////CHALLENGE 3 /////////////////////////////////<br>");
document.write(storyBuilder(arrOfTitles, arrOfParagraphs, "sciFi"))