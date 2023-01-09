const buttons = document.getElementById('buttonsgrid');
const screen = document.getElementById('screen');
const previousScreen = document.getElementById('previous-value-screen');
let currentOperator = '';
let operatorJustHit = false;

const threeButton = document.getElementById('three');


buttons.addEventListener('click', (event) => {
    let currentValue = screen.textContent;
    let previousValue = previousScreen.textContent;
    let currentOperator = '';
    let operatorJustHit = false;

    if ((event.target.dataset.type == 'number')) {
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
        
    }
})

function operate(operator) {
    if (operator == '+') {
        let result = previousValue + currentValue;
        previousValue, currentValue = result;
    } if (operator == '-') {
        let result = previousValue - currentValue;
        previousValue, currentValue = result;
    } if (operator == '/') {
        let result = previousValue / currentValue;
        previousValue, currentValue = result;
    } if (operator == '*') {
        let result = previousValue + currentValue;
        previousValue, currentValue = result;
    }
}