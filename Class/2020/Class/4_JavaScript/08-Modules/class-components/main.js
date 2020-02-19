import Human from "./person.js";
import {makeHimSayHisName,makeHerSayHerAge} from "./person.js";


let fabian = new Human("Fabian",23,"Trans");
// fabian.sayYourName()

console.log(makeHimSayHisName(fabian))

let mariam = new Human ("Mariam",18,"female")

console.log(makeHerSayHerAge(mariam))