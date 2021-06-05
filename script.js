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
  return (b !== 0 ? a / b : 'ERROR';
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
