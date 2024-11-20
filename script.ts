var display = document.getElementById("display") as HTMLInputElement;
var buttons = document.querySelectorAll(".btn");

var currentInput: string = "";
var operator: string = "";
var firstOperand: string = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value")!;

    if (value === "C") {
      // Clear display
      currentInput = "";
      firstOperand = "";
      operator = "";
      display.value = "";
    } else if (value === "=") {
      // Evaluate the expression
      if (firstOperand && operator && currentInput) {
        const result = eval(`${firstOperand} ${operator} ${currentInput}`);
        display.value = result.toString();
        currentInput = result.toString();
        firstOperand = "";
        operator = "";
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      // Operator clicked
      if (currentInput) {
        firstOperand = currentInput;
        operator = value;
        currentInput = "";
      }
    } else {
      // Number clicked
      currentInput += value;
      display.value = currentInput;
    }
  });
});
