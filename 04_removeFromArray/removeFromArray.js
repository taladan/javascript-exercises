const removeFromArray = function (arrayObject, ...removeArgs) {
  const args = [...removeArgs];
  const returnArray = [];
  for (let i = 0; i < arrayObject.length; i++) {
    if (args.includes(arrayObject[i])) {
      continue;
    } else {
      returnArray.push(arrayObject[i]);
    }
  }
  return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
