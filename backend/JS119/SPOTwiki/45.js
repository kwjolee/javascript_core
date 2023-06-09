/* 16 minutes

PROBLEM
=====
input : string
output : string

rules:
output string is the input string processed by:
  remove all characters that are not alphabets
  sorted alphabetically but not case sensitively
    order of appearance
  keep original cases

input string will not have any numerals

EXAMPLE
=====
"The Holy Bible" => "BbeehHilloTy"
whitespaces removed
sorted alphabetically
B appears before b
h appears before H

?? what if input string is empty :: ""

DATA STRUCTURE
=====
arrays, objects

ALGORITHM
=====
declare function `alphabetized` with parameter `s`

declare variable `filteredText` and init with
  `s` with all non-alphabets removed

declare variable `charCounts` and init with empty object

iterate through every `char`acter of `filteredText`
  declare variable `lowerChar` and init with lowercased `char`
  if a property exists in `charCounts` with the name of `lowerChar`
    add `char` to the value of that property
  if not
    add a property to `charCounts` with the name of `lowerChar`
    add a string that has `char` as its only character, as the value of that property
end iteration

declare variable `sortedS` and init with empty string

declare variable `props` and init with properties of `charCounts`
  sort `props` in alphabetical order

iterate through every value of `props`
  get the value of `charCounts` for the property that has the name of the value of `props`
    add this to `sortedS`
end iteration

return `sortedS`
*/

function alphabetized(s) {
  let filteredText = s.replace(/[^a-z]/gi, "");

  let charCounts = {};

  for (let char of filteredText) {
    let lowerChar = char.toLowerCase();
    if (charCounts.hasOwnProperty(lowerChar)) {
      charCounts[lowerChar] += char;
    } else {
      charCounts[lowerChar] = char;
    }
  }

  let sortedS = "";

  let props = Object.keys(charCounts).sort();

  for (let key of props) {
    sortedS += charCounts[key];
  }

  return sortedS;
}

console.log(alphabetized("The Holy Bible"));