const previousValue = document.getElementById('previous-value-screen');
const currentValue = document.getElementById('screen');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const exponentButton = document.getElementById('exponent');
const squareRootButton = document.getElementById('squareroot');
const piButton = document.getElementById('pi');
const clearButton = document.getElementById('clear');
const backspaceButton = document.getElementById('backspace');
const lnButton = document.getElementById('ln');
const logButton = document.getElementById('log10');
const nineButton = document.getElementById('nine');
const eightButton = document.getElementById('eight');
const sevenButton = document.getElementById('seven');
const sixButton = document.getElementById('six');
const fiveButton = document.getElementById('five');
const fourButton = document.getElementById('four');
const threeButton = document.getElementById('three');
const twoButton = document.getElementById('two');
const oneButton = document.getElementById('one');
const zeroButton = document.getElementById('zero');
const decimalButton = document.getElementById('decimal');
const plusminusButton = document.getElementById('plus-minus');
const equalsButton = document.getElementById('equals');

decimalButton.addEventListener('click', () => {
    if (!(currentValue.textContent.includes('.'))) {
        currentValue.textContent += decimalButton.textContent;
    }
})

previousValue.textContent = '';
currentValue.textContent = '0';

addNumberListeners()

function addNumberListeners() {
    let numbers = document.getElementsByClassName('number');
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', () => {
            if (currentValue.textContent === '0') {
                currentValue.textContent = numbers[i].textContent;
            } else {
                currentValue.textContent += numbers[i].textContent;
            }
        });
    }
}

// previousValue.textContent = currentValue.textContent; for operator listeners


function addition(existingNumber, input) {
    let result = existingNumber + input;
    console.log(result);
    calculatorDisplay.innerText = result;
}

function subtraction(existingNumber, input) {
    let result = existingNumber - input;
    console.log(result);
    calculatorDisplay.innerText = result;
}

function multiplication(existingNumber, input) {
    let result = existingNumber * input;
    console.log(result);
    calculatorDisplay.innerText = result;
}

function division(existingNumber, input) {
    let result = existingNumber / input;
    console.log(result);
    calculatorDisplay.innerText = result;
}

function exponentiation(existingNumber, input) {
    let result = existingNumber ** input;
    console.log(result);
    calculatorDisplay.innerText = result;
}

function squareRoot(existingNumber) {
    let result = Math.sqrt(existingNumber);
    console.log(result);
    calculatorDisplay.innerText = result;
}

function pi() {
    let input = 3.14;
}

function clear() {
    existingNumber = 0;
}

function log(existingNumber) {
    let result = Math.log(existingNumber)/Math.LN10;
    console.log(result);
    calculatorDisplay.innerText = result;
}

function naturalLog(existingNumber) {
    let result = Math.log(existingNumber);
    console.log(result);
    calculatorDisplay.innerText = result;
}