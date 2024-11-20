var displayValue = '';
var currentOperation = null;
var firstOperand = null;
function appendNumber(number) {
    if (displayValue === '0' && number !== '.') {
        displayValue = number;
    }
    else {
        displayValue += number;
    }
    updateDisplay();
}
function appendOperation(operation) {
    if (displayValue === '')
        return;
    if (firstOperand === null) {
        firstOperand = parseFloat(displayValue);
    }
    else {
        calculate();
    }
    currentOperation = operation;
    displayValue = '';
}
function calculate() {
    if (firstOperand === null || currentOperation === null)
        return;
    var secondOperand = parseFloat(displayValue);
    var result;
    switch (currentOperation) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        case '%':
            result = firstOperand % secondOperand;
            break;
        default:
            return;
    }
    displayValue = result.toString();
    firstOperand = result;
    currentOperation = null;
    updateDisplay();
}
function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    currentOperation = null;
    updateDisplay();
}
function toggleSign() {
    if (displayValue === '')
        return;
    displayValue = (parseFloat(displayValue) * -1).toString();
    updateDisplay();
}
function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
