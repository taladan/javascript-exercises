const palindromes = function (str) {
  // hanging on punctuation.  Likely need regexp here.
  const noPunctuation = str
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s/g, "");

  const lcStr = noPunctuation.toLowerCase();
  let value = lcStr.split("").reverse().join("") === lcStr;
  console.log(lcStr);
  return value;
};

// Do not edit below this line
module.exports = palindromes;
