// steps
// pass array (books) to getTheTitles
// for each object (book) in array (books), get the 'title' key's value
// pack that value into a flat array for return
// return the array that contains only the book titles
//
// Catch point:  I struggled with it returning 'undefined' for about an hour
// or two.  Didn't have the 'return' on the 'books.map()' line.  Simple gotchas
// are often my downfall.

const getTheTitles = function (books) {
  return books.map(getTitle);
  function getTitle(book) {
    return book.title;
  }
};

myBooks = [
  { title: "Book", author: "bob smith" },
  { title: "Book2", author: "bob smith" },
  { title: "Book3", author: "bob smith" },
  { title: "Book4", author: "bob smith" },
];

console.log(getTheTitles(myBooks));

// Do not edit below this line
module.exports = getTheTitles;
