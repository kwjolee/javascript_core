/*

PROBLEM
=====
input : array of strings
output : array of strings

rules:
input strings are lowercase only
output strings must account for repeat characters
  if a character occurs multiple times across the input strings, then output array must include character multiple times

if no repeat character is found, then return empty array
input array may contain any number of elements - but always at least 2

EXAMPLE
=====
['a', b'] => []
['ab, 'bc'] = > ['b']
['bella', 'label' ,'roller'] => ['e', 'l', 'l']

DATA STRUCTURE
=====
arrays

ALGORITHM
=====

general idea:
take the first character of the first string
  check if that character occurs in all strings
    if yes, keep that character
    if not, move to next character of first string
  if this is the last character, end iterating
return the list of kept characters

declare function `commonChars` with parameter `inputArr`
declare variable `outputArr` and init with empty array
iterate through all characters of first string
  if character occurs in all strings
    add character to `outputArr`
  if not, move to next character
end iteration
return `outputArr`
*/

function commonChars(inputArr) {
  let inputArrCopy = inputArr.slice();
  let outputArr = [];
  for (let charToCompare of inputArrCopy[0].split("")) {
    if (inputArrCopy.every(inputStr => inputStr.includes(charToCompare))) {
      outputArr.push(charToCompare);
      // remove first occurence of charToCompare from all strings
      for (let ind = 0; ind < inputArrCopy.length; ind += 1) {
        let word = inputArrCopy[ind];
        inputArrCopy[ind] = word.replace(charToCompare, "");
      }
    }
    console.log({inputArrCopy})
  }
  return outputArr;
}

// console.log(commonChars(['a', 'b']));
// console.log(commonChars(['ab', 'bc']));
console.log(commonChars(["bella", "label", "roller"]));
// console.log(commonChars(["cool", "lock", "cook"]));
// console.log(commonChars(["hello", "goodbye", "booya", "random"]));
// console.log(commonChars(["aabbaaaa", "ccdddddd", "eeffee", "ggrrrrr", "yyyzzz"]));