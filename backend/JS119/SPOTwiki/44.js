/* 10 minutes

PROBLEM
-----
input : string
output : number

rules:
output the count in the input string
  case insensitive alphabets and numeric digits
    that occur more than once

EXAMPLE
=====
"abcde" => 0 // no character occurs more than once
"aabbcde" => a occurs >1, b occurs >1 => 2
"aabBcde" => a occurs >1, b occurs >1 (case insensitive) => 2
"aA11" => a occurs >1 (case), 1 occurs >1 => 2

?? what if input string is empty ==> 0

DATA STRUCTURE
=====
arrays, objects

ALGORITHM
=====
declare function `duplicateCount` with parameter `text`

declare variable `lowerText` and init with
  `text` lowercased

declare variable `charCounts` and init with empty object

iterate through every character of `lowerText`
  if `charCounts` has a property name of this `char`acter
    increment the value of that property by 1
  if not
    add a property of this `char`acter to `charCounts`
    set its value to 1
end iteration

declare variable `counts` and init with values of `charCounts`

filter `counts` with only elements that are greater than 1

return length of filtered `counts`
*/

function duplicateCount(text) {
  let lowerText = text.toLowerCase();

  let charCounts = {};

  for (let char of lowerText) {
    charCounts[char] = charCounts[char] + 1 || 1;
  }

  let counts = Object.values(charCounts);

  counts = counts.filter(val => val > 1);

  return counts.length;
}

console.log(duplicateCount("aabBcde1"));