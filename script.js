var display = document.getElementById("display");
var buttons = document.querySelectorAll(".btn");
var currentInput = "";
var operator = "";
var firstOperand = "";
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        var value = button.getAttribute("data-value");
        if (value === "C") {
            // Clear display
            currentInput = "";
            firstOperand = "";
            operator = "";
            display.value = "";
        }
        else if (value === "=") {
            // Evaluate the expression
            if (firstOperand && operator && currentInput) {
                var result = eval("".concat(firstOperand, " ").concat(operator, " ").concat(currentInput));
                display.value = result.toString();
                currentInput = result.toString();
                firstOperand = "";
                operator = "";
            }
        }
        else if (["+", "-", "*", "/"].includes(value)) {
            // Operator clicked
            if (currentInput) {
                firstOperand = currentInput;
                operator = value;
                currentInput = "";
            }
        }
        else {
            // Number clicked
            currentInput += value;
            display.value = currentInput;
        }
    });
});
