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