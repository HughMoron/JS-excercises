//Listen for submit
const form = document.getElementById("loan-form");
form.onsubmit = calculateResults;

//UI Variables
const amount = document.getElementById("amount");
const interest = document.getElementById("interest");
const years = document.getElementById("years");
const monthlyPayment = document.getElementById("monthly-payment");
const totalPayment = document.getElementById("total-payment");
const totalInterest = document.getElementById("total-interest");
const loader = document.getElementById("loading");
const results = document.getElementById("results");

console.log(loader)
//Calculate Results
function calculateResults(e) {
    //Hide results
    results.style.display = "none";
    //Show Loader
    loader.style.display = "block";
    setTimeout(clearLoaderShowResults, 2000)

    //preventDefault
    e.preventDefault()
    //Principles
    let amountValue = parseFloat(amount.value);
    let interestValue = parseFloat(interest.value) / 100 / 12;
    let yearsValue = parseFloat(years.value) * 12;
    //Compute monthly payment
    const x = Math.pow(1 + interestValue, yearsValue)
    const monthly = (amountValue * x * interestValue) / (x - 1)

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * yearsValue).toFixed(2);
        totalInterest.value = ((monthly * yearsValue) - amountValue).toFixed(2);
        alert('You cute little sucker!!!') //Jay
    } else {
        //ALERT('error')
        showError("Please check your number")
    }
}

//DISPLAY AND HIDE ELEMENTS
function clearLoaderShowResults() {
    loader.style.display = "none";
    results.style.display = "block";
}

//SHOW ERROR
function showError(error) {
    //Create a div
    const divError = document.createElement("div");
    //Add a class
    divError.className = "alert alert-danger";
    //Create TextNode and append to div
    divError.appendChild(document.createTextNode(error));

    //Get Elements
    const card = document.querySelector(`.card`);
    const heading = document.querySelector(".heading")

    card.insertBefore(divError, heading);

    //Hide the loader and the results
    results.style.display = "none";
    loader.style.display = "none";

    //Clear error After 3 Seconds
    setTimeout(function(){
        document.querySelector(".alert").remove()
    }, 2000)
}