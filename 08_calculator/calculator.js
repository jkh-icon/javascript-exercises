const add = function(...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
};

const subtract = function(...numbers) {
  let sum = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    sum -= numbers[i];
  }
  return sum;
};

const sum = function(array) {
  return array.reduce((total, currentItem) => total + currentItem, 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  if (a === 0 || a === 1) {
    return 1;
  } else {

	let factor = a;
  for (let i = (a-1); i > 0; i--) {
    factor *= i;
  };
  return factor;
};
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
