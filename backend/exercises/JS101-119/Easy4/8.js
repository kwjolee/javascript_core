/*
input : string of space separated words
output : new string
  each word has and last letters swapped
*/

function swap(string) {
  let outArr = [];
  for (let word of string.split(" ")) {
    let newWord = word;
    if (word.length > 1) {
      newWord = word[word.length - 1] + word.slice(1, -1) + word[0];
    }
    outArr.push(newWord);
  }
  let outStr = outArr.join(" ");
  return outStr;
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"