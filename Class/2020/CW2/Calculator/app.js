const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = document.querySelector('.calculator__display')


keys.addEventListener('click', e => {
 if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    console.log(action)

    if (!action) {
        if (displayedNum === '0') {
          display.textContent = keyContent
        }
      } else {
        display.textContent = displayedNum + keyContent
      }

    if (action === 'decimal') {
        display.textContent = displayedNum + '.'
      }

      
    }

}





})














let sum = (operand1, operand2) => operand1 + operand2;
let dif = (operand1, operand2) => operand1 - operand2;
let prod = (operand1, operand2) => operand1 * operand2;
let quote = (operand1, operand2) => operand1 / operand2;

