/* 8 minutes

PROBLEM
=====
input : array
output : string

rules:
input array has consecutive characters
  in increasing alphabetical order
    but one letter is skipped
output the skipped letter

input array has length at least 2
input array has characters of all same case

DATA STRUCTURE
=====

ALGORITHM
=====
declare function `findMissingLetter` with parameter `array`

iterate through every letter of `array`
  if the next letter comes after current letter in the alphabet
    move to next letter
  if not
    return what should be the next letter
end iteration
*/

function findMissingLetter(array) {
  for (let ind = 0; ind < array.length - 1; ind += 1) {
    let currCode = array[ind].charCodeAt();
    let nextCode = array[ind + 1].charCodeAt();
    if ((nextCode - currCode) !== 1) {
      return String.fromCharCode(currCode + 1);
    }
  }
}

console.log(findMissingLetter(["a", "b", "c", "e"]))