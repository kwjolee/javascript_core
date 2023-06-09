/*

PROBLEM
=====
input : string
output : string

rules:
output string is
  the character in the input string
    that occurs the least number of times
      in lowercase form

if there is a tie of minimum occurrence
  output string is
    the character that occurs first in the input string

when counting characters, case is not senstive

?? spaces :: count as char
?? input string is empty :: ""
?? special characters :: count as char

EXAMPLE
=====
"Hello world" => "h"
"Mississippi" => "m"
"Happy birthday!" => " "

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `leastCommonChar` with parameter `inputStr`

reassign `inputStr` with lowercase form of itself

declare variable `minCount` and init with Infinity
declare variable `candidate`

iterate through every `char`acter of `inputStr`
  count how many times this `char` occurs in `inputStr` :: helper
  if this count is is less than `minCount`
    reassign `minCount` with this count
    reassign `candidate` with this `char`
end iteration

return `candidate`
*/
function leastCommonChar(inputStr) {
  inputStr = inputStr.toLowerCase();

  let minCount = Infinity;
  let candidate;

  for (let char of inputStr) {
    let count = countOccurrence(char, inputStr);
    if (count < minCount) {
      minCount = count;
      candidate = char;
    }
  }

  return candidate;
}

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

/* helper :: countOccurrence
input : char, string
output : number
split string into array of characters
filter that array to characters that are input `char`
return the length of this filtered array
*/

function countOccurrence(char, string) {
  let arr = string.split("");
  arr = arr.filter(val => val === char);
  return arr.length;
}
