const add = (a, b) => {
  return a + b;
};

const substract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return (b !== 0 ? a / b : 'ERROR');
};

const operate = (operator, a, b) => {
  if (operator == 'add') {
    return add(a, b);
  } else if (operator == 'substract') {
    return substract(a, b);
  } else if (operator == 'multiply') {
    return multiply(a, b);
  } else if (operator == 'divide') {
    return divide(a, b);
  };
};

const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');
var num = [];
var arr = [];
var operator;
var result;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (!isNaN(button.id)) {
      num.push(button.id);
      display.textContent = num.join('');
    } else if (button.id !== 'clear' && button.id !== 'equals') {
      arr.push(parseInt(num.join('')));
      num.length = 0;
      operator = button.id;
    } else if (button.id === 'clear') {
      display.textContent = '0';
      num.length = 0;
      arr.length = 0;
    } else if (button.id === 'equals') {
      arr.push(parseInt(num.join('')));
      num.length = 0;
      result = operate(operator, ...arr);
      display.textContent = result;
      arr = [result];
    }
  })
})
