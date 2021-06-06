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
var num = '';
var arr = [];
var operator;
var result;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.className == 'num') {
      if (num.length < 8) {
        num = num.concat(button.id);
      };
      display.textContent = num;
    } else if (button.className == 'point' && num.indexOf('.') === -1) {
      num = num.concat('.');
      display.textContent = num;
      button.disabled = true;
    } else if (button.id !== 'clear'
            && button.id !== 'delete'
            && button.id !== 'equals') {
      if (button.id === 'substract' && num == '') {
        num = num.concat('-');
        display.textContent = num;
      } else {
        buttons.forEach(button => {button.disabled = false;});
        if (arr.length !== 1) {
          arr.push(parseFloat(num));
          num = '';
        }
        operator = button.id;
        if (arr.length === 2) {
          result = operate(operator, ...arr);
          num = result.toString();
          if (num.length > 9 && num.indexOf('.') !== -1) {
            let precision = 9 - (num.indexOf('.'));
            num = num.slice(0, precision);
            num = num.replace(/0+$/, '');
          } else if (num.length > 8) {
            num = 'OVERFLOW';
          }
          display.textContent = num;
          arr = [];
          num = '';
          arr.push(result);
        };
      };
    } else if (button.id === 'clear') {
      display.textContent = '0';
      num = '';
      arr.length = 0;
      buttons.forEach(button => {button.disabled = false;});
    } else if (button.id === 'delete') {
      num = num.slice(0, num.length-1);
      display.textContent = num;
      if (num.indexOf('.') === -1) {
        buttons.forEach(button => {button.disabled = false;});
      }
    } else if (button.id === 'equals' && arr.length === 1) {
      buttons.forEach(button => {button.disabled = false;});
      arr.push(parseFloat(num));
      result = operate(operator, ...arr);
      num = result.toString();
      if (num.length > 9 && num.indexOf('.') !== -1) {
        let precision = 9 - (num.indexOf('.'));
        num = num.slice(0, precision);
        num = num.replace(/0+$/, '');
      } else if (num.length > 8) {
        num = 'OVERFLOW';
      }
      display.textContent = num;
      arr = [];
      arr.push(parseFloat(num));
      num = '';
    }
  })
})
