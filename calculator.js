const buttons = document.getElementById('buttons-grid');
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
        } if (operatorJustHit) {
            screen.textContent = 0;
            operatorJustHit = false;    
            currentValue = operate(previousValue, currentValue, operator);
            screen.textContent = event.target.value;
        }
    }

    if (event.target.id === 'clear') {
        screen.textContent = 0;
    }

    if (event.target.dataset.type === 'operator') {
        currentOperator = event.target.value;
        operatorJustHit = true;
        previousScreen.textContent = currentValue;
    }
})

// function operate(previousValue, currentValue, operator) {
//     if (operator == '+') {
//         let result = previousValue + currentValue;
//         return result;
//     } if (operator == '-') {
//         let result = previousValue - currentValue;
//         return result;
//     } if (operator == '/') {
//         let result = previousValue / currentValue;
//         return result;
//     } if (operator == '*') {
//         let result = previousValue + currentValue;
//         return result;
//     }
// }