const buttons = document.getElementById('buttons-grid');
const screen = document.getElementById('screen');
const previousScreen = document.getElementById('previous-value-screen');
let currentOperator = '';
let operatorJustHit = false;

const threeButton = document.getElementById('three');


buttons.addEventListener('click', (event) => {
    let currentValue = screen.textContent;
    let previousValue = previousScreen.textContent;

    if ((event.target.dataset.type == 'number')) {
        if (!operatorJustHit) {
            if (screen.textContent.length < 9) {
                if (currentValue === '0') {
                    screen.textContent = event.target.value;
                    return;
                } else {
                    screen.textContent += event.target.value;
                    return;
                }
            } else {
                return;
            }
        } else if (operatorJustHit) {
            previousScreen.textContent = screen.textContent;
            screen.textContent = 0;
            operatorJustHit = false;    
            // currentValue = operate(previousValue, currentValue, operator);
            screen.textContent = event.target.value;
            return;
        }
    }

    if (event.target.id === 'clear') {
        screen.textContent = 0;
        previousScreen.textContent = 0;
        operatorJustHit = false;
        currentOperator = '';
        return;
    }

    if (event.target.dataset.type === 'operator') {
        if (currentOperator) {
            screen.textContent  = operate(previousValue, screen.textContent, currentOperator);
            currentOperator = event.target.value;
            operatorJustHit = true;
            return;
        } else if (!currentOperator) {
            currentOperator = event.target.value;
            operatorJustHit = true;
            previousScreen.textContent = currentValue;
            return;
        }
    }

    if (event.target.id === 'backspace') {
        screen.textContent = screen.textContent.slice(0, -1);
        if (screen.textContent == '') {
            screen.textContent = 0;
        }
        return;
    }

    if (event.target.id === 'squareroot') {
        screen.textContent = Math.sqrt(screen.textContent);
        return;
    }

    if (event.target.id === 'equals') {
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
        return parseInt(previousValue) + parseInt(currentValue);
    } if (operator === '-') {
        return parseInt(previousValue) - parseInt(currentValue);
    } if (operator === '/') {
        return parseInt(previousValue) / parseInt(currentValue);
    } if (operator === '*') {
        return parseInt(previousValue) * parseInt(currentValue);
    }
}