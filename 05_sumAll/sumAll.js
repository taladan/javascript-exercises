const sumAll = function (num1, num2) {
  // Test num1 to ensure it's a positive number
  // Test num2 to ensure it's a positive nubmer
  let summedTotal = 0;
  if (
    typeof num1 === "number" &&
    typeof num2 === "number" &&
    Math.sign(num1) == 1 &&
    Math.sign(num2) == 1
  ) {
    if (num1 < num2) {
      while (num1 <= num2) {
        summedTotal = summedTotal + num1;
        num1++;
      }
    } else if (num2 < num1) {
      while (num2 <= num1) {
        summedTotal = summedTotal + num2;
        num2++;
      }
    } else {
      summedTotal = num1;
    }
    return summedTotal;
  }
  return "ERROR";
};
// If both numbers are positive:
// determine lowest number
// iterate for a range from lowest nubmer -> highest number and add each iteration to the value
// return final summed value of all integers between and including lowest number & highest number

// Do not edit below this line
module.exports = sumAll;
