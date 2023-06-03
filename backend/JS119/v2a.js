/* 15 minutes

PROBLEM
=====

input : string
output : boolean

rules:
if a substring of the input string can be repeated any number of times to create the input string
  return true
otherwise
  return false

EXAMPLE
=====
"abab" => true since "ab" repeats twice
"aba" => false since it does not repeat
"aabaaba" => false since it does not repeat

DATA STRUCTURE
=====
probably arrays

general idea:
by nature of the problem, a valid substring must overlap with the start of the input string
first use the first char of input string and see if that can be repeated to make string
  keep concatenating as long as concat string is shorter than input string
    if concat string is equal length then it's the input string not substring
then use first two chars of input string and see if that can be repeated to make string
  repeat until substring length is more than half the input string length
if match is found, return true
if match is not found, return false

ALGORITHM
=====
declare function `repeatedSubstringPattern` with parameter `inputString`
declare variable `numChars` and init with 1
iterate through the substrings of `inputString`
  declare variable `substr` and init with first `numChars` characters of `inputString`
  declare variable `repeats` and init with 1
  repeat `substr` `repeats`-many times and check against `inputString`
    if not match, increment `repeats` by 1
    if match, return `true`
  if not match, increment `numChars` by 1 and repeat loop
  if `numChars` exceeds half the length of `inputString`, return `false`
*/

function repeatedSubstringPattern(inputString) {
  let numChars = 1;
  while (numChars <= (inputString.length / 2)) {
    let substr = inputString.slice(0, numChars);
    let concatStr = substr;
    let repeats = 1;
    while (concatStr.length < inputString.length) {
      concatStr = substr.repeat(repeats);
      if (concatStr === inputString) return true;
      repeats += 1;
    }
    numChars += 1;
  }
  return false;
}

console.log(repeatedSubstringPattern("abab") === true);
console.log(repeatedSubstringPattern("aba") === false);
console.log(repeatedSubstringPattern("aabaaba") === false);
console.log(repeatedSubstringPattern("abaababaab") === true);
console.log(repeatedSubstringPattern("abcabcabcabc") === true);
console.log(repeatedSubstringPattern("a") === false);