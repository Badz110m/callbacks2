/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.
*******************************************************************************/
//IN: sentence, object (key = suffix, value=cb)
//OUT: new sentence, words modified according to suffix-->cb in obj
//if no match, not modified. assume each word only matches one suffix
// .split -> map -> .join
//          match w suffix backwards: iterate backwards. or, endswith
//          if else

//with i loop, and with for of loop...

// function suffixCipher(sentence, cipher) {
//   return sentence.split(' ').map(word => {
//     for (let i = word.length - 1; i >= 0; i--) {
//       let cb = cipher[word.slice(i)];
//       if (cb) return cb(word);
//     }
//     return word;
//   }).join(' ');
// }

function suffixCipher(sentence, cipher) {
  return sentence.split(' ').map(word => {
    for (let suffix of Object.keys(cipher)) {
      if (word.endsWith(suffix)) return cipher[suffix](word);
    }
    return word;
  }).join(' ');
}

// let cipher1 = {
//   ly: function(word) {
//       return word.slice(0, -1) + 'ee';
//   },
//   ize: function(word) {
//       return word + 'r';
//   }
// };
// console.log(suffixCipher('quietly and gently visualize', cipher1));
// // quietlee and gentlee visualizer

// let cipher2 = {
//   tal: function(word) {
//       return word.toUpperCase();
//   },
//   s: function(word) {
//       return word + 'th';
//   }
// };
// console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// // INCREMENTAL progressth isth very INSTRUMENTAL

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = suffixCipher;
} catch(e) {
  return null;
}
