const add = function (...args) {
  return args.reduce((accumulator, currentValue) => accumulator + currentValue);
};

const subtract = function (...args) {
  return args.reduce((accumulator, currentValue) => accumulator - currentValue);
};

const sum = function (args) {
  let value = 0;
  if (args.length !== 0) {
    value = args.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  }
  return value;
};

const multiply = function (args) {
  return args.reduce((accumulator, currentValue) => accumulator * currentValue);
};

const power = function (...args) {
  return args.reduce(
    (accumulator, currentValue) => accumulator ** currentValue
  );
};

const factorial = function (arg) {
  let value = 0;
  if (arg === 0) {
    value = 1;
  } else {
    const args = [];
    for (i = 1; i <= arg; i++) {
      args.push(i);
    }
    value = args.reduce((a, b) => a * b);
  }
  return value;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
