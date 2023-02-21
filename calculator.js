const buttons = document.getElementById('buttons-grid');
const screen = document.getElementById('screen');
const previousScreen = document.getElementById('previous-value-screen');
let currentOperator = '';
let operatorJustHit = false;

buttons.addEventListener('click', (event) => {
    const currentValue = screen.textContent;
    const previousValue = previousScreen.textContent;
    const input = event.target.value;
    const type = event.target.dataset.type;
    const id = event.target.id;

    if (type === 'number') {
        handleNumber(input, currentValue);
    }

    if (id === 'decimal') {
        addDecimal();
        return;
    }

    if (id === 'clear') {
        clearScreen();
        return;
    }

    if (type === 'operator') {
        changeOperator(input, previousValue, currentValue);
        return;
    }

    if (id === 'backspace') {
        deleteCharacter(currentValue);
        return;
    }

    if (id === 'plus-minus') {
        changeSign(currentValue);
        return;
    }

    if (id === 'log10') {
        calculateLog10(currentValue);
        return;
    }

    if (id === 'ln') {
        calculateNaturalLog(currentValue);
        return;
    }

    if (id === 'squareroot') {
        calculateSquareRoot(currentValue);
        return;
    }

    if (id === 'pi') {
        calculatePi();
        return;
    }

    if (id === 'equals') {
        screen.textContent = operate(previousValue, currentValue, currentOperator);
        return;
    }
})

function handleNumber(input, currentValue) {
    if (!operatorJustHit) {
        if (currentValue.length < 9) {
            if (currentValue === '0') {
                screen.textContent = input;
                return;
            } else {
                screen.textContent += input;
                return;
            }
        } else {
            return;
        }
    } else if (operatorJustHit) {
        previousScreen.textContent = screen.textContent;
        screen.textContent = 0;
        operatorJustHit = false;    
        screen.textContent = input;
        return;
    }
}

function addDecimal() {
    if (!(currentValue.includes('.'))) {
        screen.textContent += '.';
    }
}

function clearScreen() {
    screen.textContent = 0;
    previousScreen.textContent = 0;
    operatorJustHit = false;
    currentOperator = '';
}

function changeOperator(input, previousValue, currentValue) {
    if (currentOperator) {
        screen.textContent  = operate(previousValue, currentValue, currentOperator);
        currentOperator = input;
        operatorJustHit = true;
        return;
    } else if (!currentOperator) {
        currentOperator = input;
        operatorJustHit = true;
        previousScreen.textContent = currentValue;
        return;
    }
}

function changeSign(currentValue) {
    if (currentValue === '0') {
        return;
    } if (!(currentValue.includes('-'))) {
        screen.textContent = '-' + screen.textContent;
        return;
    } else {
        screen.textContent = screen.textContent.slice(1);
        return;
    }
}

function deleteCharacter() {
    screen.textContent = screen.textContent.slice(0, -1);
    if (screen.textContent == '') {
        screen.textContent = 0;
    } if (currentValue[currentValue.length-1] === '.') {
        screen.textContent = screen.textContent.slice(0, -1);
    }
}

function calculateLog10(currentValue) {
    screen.textContent = Math.log(currentValue)/Math.LN10;
}

function calculateNaturalLog(currentValue) {
    screen.textContent = Math.log(currentValue);
}

function calculateSquareRoot(currentValue) {
    screen.textContent = Math.sqrt(currentValue);
}

function calculatePi() {
    screen.textContent = Math.PI;
}

function operate(previousValue, currentValue, operator) {
    if (operator === '') {
        return;
    } if (operator === '+') {
        return parseFloat(previousValue) + parseFloat(currentValue);
    } if (operator === '-') {
        return parseFloat(previousValue) - parseFloat(currentValue);
    } if (operator === '/') {
        if (currentValue == 0) {
            return 'Universe Deleted';
        } else {
        return parseFloat(previousValue) / parseFloat(currentValue);
        }
    } if (operator === '*') {
        return parseFloat(previousValue) * parseFloat(currentValue);
    } if (operator === 'exponent') {
        return parseFloat(previousValue) ** parseFloat(currentValue);
    }
    currentOperator = '';
    operatorJustHit = false;
}