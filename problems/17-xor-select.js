/*******************************************************************************
Write a function `xorSelect` that accepts an array and two callback as arguments.
The function should return a new array containing elements of the original array
that result in true when passed in one of the callbacks, but not both.
*******************************************************************************/
//INPUT: array, 2 callbacks
//OUTPUT: new array, OG elements that result in true when in 1 of the cbs but not both
// filter -> if (cb1&&!cb2 || cb2&&!cb1)
let xorSelect = function(array, cb1, cb2) {
  return array.filter((ele) => {
    return (cb1(ele) && !cb2(ele) || cb2(ele) && !cb1(ele))
  })
};

// let isEven = function(n) {
//   return n % 2 === 0;
// };

// let isPositive = function(n) {
//   return n > 0;
// };

// console.log(xorSelect([-2, -1, 1, 2, 3, 4], isEven, isPositive));
// // [ -2, 1, 3 ]


// let longString = function(s) {
//   return s.length > 4;
// };

// let startsA = function(s) {
//   return s[0] === "a";
// };

// console.log(
//   xorSelect(["art", "academy", "app", "cat", "buttery"], longString, startsA)
// );
// // [ 'art', 'app', 'buttery' ]

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = xorSelect;
} catch(e) {
  return null;
}
