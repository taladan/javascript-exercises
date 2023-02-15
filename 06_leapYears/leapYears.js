const leapYears = function (year) {
  if (typeof year === "number") {
    // is year evenly divisible by 400 or 4 and not 100 it's a leap year
    if (year % 400 === 0 || (year % 4 === 0 && !(year % 100 === 0))) {
      return true;
    } else {
      return false;
    }
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = leapYears;
