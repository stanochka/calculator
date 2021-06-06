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

//TODO: make result show after operations button click if display not zero
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.className == 'num') {
      if (num.length < 8) {
        num = num.concat(button.id);
      };
      console.log('num');
      console.log(num);
      display.textContent = num;
    } else if (button.className == 'point' && num.indexOf('.') === -1) {
      console.log('point');
      num = num.concat('.');
      display.textContent = num;
      button.disabled = true;
    } else if (button.id !== 'clear'
            && button.id !== 'delete'
            && button.id !== 'equals') {
      console.log('operation')
      buttons.forEach(button => {button.disabled = false;});
      arr.push(parseFloat(num));
      console.log(arr);
      num = '';
      operator = button.id;
      if (arr.length === 2) {
        console.log('second operation')
        result = operate(operator, ...arr);
        display.textContent = result;
        arr = [];
        num = '';
        arr.push(result);
        console.log(arr);
      }
    } else if (button.id === 'clear') {
      console.log('clear');
      display.textContent = '0';
      num = '';
      arr.length = 0;
      buttons.forEach(button => {button.disabled = false;});
    } else if (button.id === 'delete') {
      console.log('delete');
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
      display.textContent = num;
      arr = [];
    }
  })
})
