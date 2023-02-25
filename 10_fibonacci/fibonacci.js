const fibonacci = function (position) {
  /*
  to solve this I have to have a way to generate a fib sequence
  then I need to be able to index to 'position' in the sequence
  and return it.  It must accept integer numbers and strings that
  are representative of an integer.  It must error on negative numbers
  */

  //refactor code
  position = parseInt(position);
  if (position < 0) {
    return "OOPS";
  } else {
    let fib = new Array(position + 1).fill(1).reduce((acc, cur, curI) => {
      acc.push(curI <= 1 ? curI : acc[curI - 2] + acc[curI - 1]);
      return acc;
    }, []);
    return fib[position];
  }
};
// working code
// position = parseInt(position);
// if (position < 0) {
//   return "OOPS";
// } else {
//     let fib = [1, 1];
//     for (i = 1; i < position; i++) {
//       fib.push(fib[i] + fib[i - 1]);
//       console.log(fib);
//     }
//     return fib[position - 1];
//   }
// };

// console.log(fibonacci(5));
// Do not edit below this line
module.exports = fibonacci;
