/* eslint-disable max-statements */ 17
/* eslint-disable max-lines-per-function */
/* 10 minutes

PROBLEM
=====
input : string
output : string

input string is of digits
output string is the input string modified by:
  split into substrings of size `sz`
    if substring is shorter than `sz` then ignore
  if digits of substring cubed, summed, is even
    reverse substring
  if not
    rotate substring to left by 1
  put all substrings back together

EXAMPLE
=====

DATA STRUCTURE
=====
array

ALGORITHM
=====
split input string into substrings of length sz
if digits cubed summed is even
  reverse substring
if not
  rotate substring
if final substring is shorter than sz
  discard
put all substrings back together
*/

function revrot(str, sz) {
  if (sz === 0) return "";
  let outStr = "";

  let currStr = str;
  while (currStr.length >= sz) {
    let substring = currStr.slice(0, sz);
    currStr = currStr.slice(sz);
    let sum = [...substring].reduce((acc, val) => acc + (val ** 3), 0);
    if (sum % 2 === 0) {
      outStr += [...substring].reverse().join("");
    } else {
      let subarr = [...substring];
      subarr.push(subarr.shift());
      outStr += subarr.join("");
    }
  }
  return outStr;
}

/*
PART 2 : 17 minutes
*/

/*

PROBLEM
=====
input : string
output : string

rules:
second and last letter are switched
first letter is replaced by character code

words are separated by space
word may not necessarily be 3 characters long

EXAMPLE
=====
72olle => hello :: 72 = h, o<->e

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `decipherThis` with parameter `str`

declare variable `strArr` and init with the word of `str` as elements
  words of `str` are separated by space

declare variable `outArr` and init with empty array

iterate through every `word` of `strArr`
  declare variable `charCode` and init with empty string
  
  iterate through every `char`acter of `word
    if `char` is numeric, add to `charCode`
    if not
      reassign `word` with just the remaining characters
      break iteration
  end iteration

  convert `charCode` to string +
    swap second and last characters of `word`
      add to `outArr`

end iteration

convert `outArr` to single string by joining elements using " " as delimiter
return the converted string
*/

function decipherThis(str) {
  let strArr = str.split(" ");

  let outArr = [];

  for (let word of strArr) {
    let charCode = "";

    let wordClipped = false;
    for (let ind = 0; ind < word.length; ind += 1) {
      if (word[ind] < 10) {
        charCode += word[ind];
      } else {
        word = word.slice(ind);
        wordClipped = true;
        break;
      }
    }
    if (!wordClipped) word = "";

    let prefix = String.fromCharCode(Number(charCode));
    let suffix = [...word];
    
    [suffix[0], suffix[suffix.length - 1]] = [suffix[suffix.length - 1], suffix[0]];
    suffix = suffix.join("");
    outArr.push(prefix + suffix);
  }
  return outArr.join(" ");
}

console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'))