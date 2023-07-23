/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/
//INPUT: array, callback (optional)
//OUTPUT: no callback --> returns smallest value. If callback --> smallest cb(value)
//PLAN: if callback --> .reduce to find smallest

function minValueCallback(array, cb) {
  if (cb === undefined) {
    return array.reduce(smallerValue, Infinity);
  } else {
    return array.map(cb).reduce(smallerValue,Infinity);
  }
}

function smallerValue(accum, ele) {
  return accum > ele ? ele: accum;
}

function minValueCallback2(array, cb) {
  let min = null
  for(let i = 0; i < array.length; i++) {
    // console.log(array[i])
    let index = array[i]
      if(index < min || min === null) {
        min = index
      }
  }

  if (cb !== undefined) {
     min = cb(min)
  }

  return min
}

console.log(minValueCallback([]));             // 9
// console.log(minValueCallback2([64, 25, 49, 9, 100], (num) => num*=(-1)));  // 3

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = minValueCallback;
} catch(e) {
  return null;
}
