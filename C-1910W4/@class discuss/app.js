let rslts = [78, 82, 45, 69, 23, 91, 55, 39, 66, 60];
let basis = 50;

function passed(arr, basis) {
    let notpassed = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < basis) {
            notpassed.push(arr[i])
        }
    }
    return `${(notpassed.length)/(arr.length)*100}% have not passed the test.`
}
document.write(passed(rslts, basis));


////////////////////////////////////
function over50 (arr){
return arr.find(function(item) {
    return item.age > 50;
})
};

let ppl = [{name: "Jay", age: 24},{name: "Kay", age: 34},{name: "Ray", age: 44},{name: "Lay", age: 54}];

document.write(over50(ppl))
console.log(over50(ppl))