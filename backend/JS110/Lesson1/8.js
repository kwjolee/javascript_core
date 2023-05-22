/*
Problem
Input : array of strings
Output : new array where strings are sorted to the highest number of adjacent consonants

Rule:
if two words have the same number of adjacent consonants, preserve original order
returned array is a new array
white spaces do not break the adjacent count
strings can have multiple words

Example

Data structures
array and object

Algorithm
declare function sortStringsByConsonants
declare output array `outArray`
declare empty object `holdObject`
iterate through each element (string) of input array
count number of consecutive consonants in each element (string) -- may need another function
if key with this number does not exist in object, make key with value of empty object
mutate value of key with this number by pushing string to it
once done iterating, go through every key of `holdObject`
go through in order of highest key to lowest key
push each value to `outArray`
flatten `outArray` then return it

*/

function sortStringsByConsonants(inputArray) {
  let outArray = [];
  let holdObject = {};
  for (let string of inputArray) {
    let consCount = countCons(string);
    if (!holdObject.hasOwnProperty(String(consCount))) {
      holdObject[String(consCount)] = [];
    }
    holdObject[String(consCount)].push(string);
  }

  let allKeys = Object.keys(holdObject).sort((a, b) => Number(b) - Number(a));
  for (let keyName of allKeys) {
    outArray.push(holdObject[keyName]);
  }

  return outArray.flat(1);
}

console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']

function countCons(string) {
  let maxCount = 0;
  let count = 0;
  let wasCons = false;
  const VOWELS = 'aeiou';
  for (let char of string.split("")) {
    if (char === " ") continue;
    let isCons = !VOWELS.includes(char);
    if (wasCons && isCons) {
      count += 1;
    } else if (!wasCons && !isCons) {
      count = 0;
    }
    wasCons = isCons;
    maxCount = Math.max(maxCount, count);
  }
  return maxCount;
}
