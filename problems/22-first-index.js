/*******************************************************************************
Write a function `firstIndex` that accepts an array and a callback as arguments.
The function should return the index of the first element of the array that
results in true when passed into the callback. If no elements of the array
result in true, then the function should return -1.
*******************************************************************************/
//INPUT: array, cb
//OUTPUT: index of first elem that's true when passed through callback. if no true, return -1
function firstIndex(array, cb) {
  // return array.findIndex(cb);

  // let first = true;
  // return array.reduce( (accum,ele,i) => {
  //   if (cb(ele) && first) {
  //     first = false;
  //     return i;}
  //   else return accum;
  // }, -1)

  return array.indexOf(array.find(cb));
}

// let result1 = firstIndex([3, 7, 8, 10], function (n) {
//   return n % 2 === 0;
// });
// console.log(result1); // 2

// let result2 = firstIndex(['dog', 'cat', 'tree'], function (s) {
//   return s.length === 3;
// });
// console.log(result2); // 0

// let result3 = firstIndex(['canine', 'feline', 'tree'], function (s) {
//   return s.length === 3;
// });
// console.log(result3); // -1

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = firstIndex;
} catch(e) {
  return null;
}
