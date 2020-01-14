const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = document.querySelector('.calculator__display')


keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    // prev... is undefined until an operator Button is clicked, then it changes to "operator":
    const previousKeyType = calculator.dataset.previousKeyType
    console.log(previousKeyType)

     // Remove .is-depressed class from all keys
     Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))
    // IF SOMETHING IS PRESSED OTHER THAN ACTION-DATA --> So a digit
    if (!action) {
      // If the display is 0 or the target was an operator, change the display, otherwise add digit to existing
      if (displayedNum === '0'|| previousKeyType === 'operator') {
        display.textContent = keyContent;
        calculator.dataset.previousKeyType = "";
      }
     else {
      display.textContent = displayedNum + keyContent
    }
  }
    // Decimal Rules
    if (action === 'decimal') {
      display.textContent = displayedNum + '.'
    }

    //Operator Rules
    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      // Styling Action-button if it is clicked until a digit is clicked
      key.classList.add('is-depressed');
      // Add custom attribute, so that the input before the operator will be erased from the display:
      calculator.dataset.previousKeyType = 'operator';
      //Saving the displayed Number as the First Value to the Dataset, before it gets cleared
      calculator.dataset.firstValue = displayedNum
      //Saving the operator before it gets cleared
      calculator.dataset.operator = action
    }
    if (action === 'clear') {
      display.textContent = 0
    }
    if (action === 'calculate') {
      const firstValue = calculator.dataset.firstValue
      const operator = calculator.dataset.operator
      const secondValue = displayedNum
      // Calling the calculate Function and Displaying it.
      display.textContent = calculate(firstValue, operator, secondValue)
    }
  }
});

    

const calculate = (operand1, operator, operand2) => {
  let result = ''
  
  if (operator === 'add') {
    result = parseFloat(operand1) + parseFloat(operand2)
  } else if (operator === 'subtract') {
    result = parseFloat(operand1) - parseFloat(operand2)
  } else if (operator === 'multiply') {
    result = parseFloat(operand1) * parseFloat(operand2)
  } else if (operator === 'divide') {
    result = parseFloat(operand1) / parseFloat(operand2)
  }
  
  return result
}










// SAFWAN 
let sum = (operand1, operand2) => operand1 + operand2;
let dif = (operand1, operand2) => operand1 - operand2;
let prod = (operand1, operand2) => operand1 * operand2;
let quote = (operand1, operand2) => operand1 / operand2;