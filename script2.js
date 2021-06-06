function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case 'add' :
      return add(a, b);
    case 'substract' :
      return substract(a, b);
    case 'multiply' :
      return multiply(a, b);
    case 'divide' :
      if (b === 0) return null;
      else return divide(a, b);
    default:
      return null;
  };
}

const numberButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.operation');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');
const equalsButton = document.querySelector('#equals');
const pointButton = document.querySelector('#point');
const display = document.querySelector('#display');

let firstNumber = "";
let secondNumber = "";
let operation = null;
let shouldReset = false;

equalsButton.addEventListener("click", evaluate);
clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteNumber);
pointButton.addEventListener("click", appendPoint);

numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.id))
);

operatorButtons.forEach((button) =>
  button.addEventListener("click", () => setOperation(button.id))
);

function appendNumber(number) {
  if (display.textContent === "0" || shouldReset) resetScreen();
  display.textContent += number;
}

function resetScreen() {
  display.textContent = "";
  shouldReset = false;
}

function clear() {
  display.textContent = "0";
  firstNumber = "";
  secondNumber = "";
  operation = null;
}

function appendPoint() {
  if (shouldReset) resetScreen();
  if (display.textContent === "") display.textContent = "0";
  if (display.textContent.includes(".")) return;
  display.textContent += ".";
}

function deleteNumber() {
  display.textContent = display.textContent.toString().slice(0, -1);
}

function setOperation(operator) {
  console.log(operator)
  if (operation !== null) evaluate();
  firstNumber = display.textContent;
  operation = operator;
  shouldReset = true;
}

function evaluate() {
  if (operation === null || shouldReset) return;
  if (operation === "divide" && display.textContent === "0") {
    display.textContent = "ERROR";
    clear();
    return;
  }
  secondNumber = display.textContent;
  display.textContent = roundResult(
    operate(operation, firstNumber, secondNumber)
  );
  operation = null;
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}
