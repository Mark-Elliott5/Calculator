const currentValue = document.getElementById('screen');
let previousValue = 0
let currentOperator = ''

const buttons = document.addEventListener('click', (e) => {
    const input = e.target;

    if ((input.dataset.type === 'number') && (currentOperator === '')) {
        if (currentValue.textContent === '0') {
            currentValue.textContent = input.textContent;
        } else {
            currentValue.textContent += input.textContent;
        }
    }
})