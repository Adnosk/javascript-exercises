const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((accumulator, number) => accumulator + number, 0);
};

const multiply = function(array) {
  return array.length ? 
  array.reduce((accumulator, number) => accumulator * number)
  :0;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(number) {
	if (number === 0) {
    return 1;
  }
  return number * factorial(number-1);
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
