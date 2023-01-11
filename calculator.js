const buttons = document.getElementById('buttons-grid');
const screen = document.getElementById('screen');
const previousScreen = document.getElementById('previous-value-screen');
let currentOperator = '';
let operatorJustHit = false;

buttons.addEventListener('click', (event) => {
    let currentValue = screen.textContent;
    let previousValue = previousScreen.textContent;
    const input = event.target.value;
    const type = event.target.dataset.type;
    const id = event.target.id;

    if ((type === 'number')) {
        if (!operatorJustHit) {
            if (screen.textContent.length < 9) {
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

    if (id === 'decimal') {
        if (!(currentValue.includes('.'))) {
            screen.textContent += '.';
            return;
        }
    }

    if (id === 'clear') {
        screen.textContent = 0;
        previousScreen.textContent = 0;
        operatorJustHit = false;
        currentOperator = '';
        return;
    }

    if (type === 'operator') {
        if (currentOperator) {
            screen.textContent  = operate(previousValue, screen.textContent, currentOperator);
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

    if (id === 'backspace') {
        screen.textContent = screen.textContent.slice(0, -1);
        if (screen.textContent == '') {
            screen.textContent = 0;
        } if (screen.textContent[screen.textContent.length-1] === '.') {
            screen.textContent = screen.textContent.slice(0, -1);
        } return;
    }

    if (id === 'plus-minus') {
        if (screen.textContent === '0') {
            return;
        } if (!(screen.textContent.includes('-'))) {
            screen.textContent = '-' + screen.textContent;
            return;
        } if (screen.textContent.includes('-')) {
            screen.textContent = screen.textContent.slice(1);
            return;
        }
    }

    if (id === 'log10') {
        screen.textContent = Math.log(currentValue)/Math.LN10;
        return;
    }

    if (id === 'ln') {
        screen.textContent = Math.log(currentValue);
        return;
    }

    if (id === 'squareroot') {
        screen.textContent = Math.sqrt(screen.textContent);
        return;
    }

    if (id === 'pi') {
        screen.textContent = Math.PI;
    }

    if (id === 'equals') {
        if (currentOperator == '') {
            return;
        }
        screen.textContent = operate(previousScreen.textContent, screen.textContent, currentOperator);
        currentOperator = '';
        operatorJustHit = false;
        return;
    }
})

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
}