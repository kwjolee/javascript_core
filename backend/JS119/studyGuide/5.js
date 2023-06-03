/* 16 minutes

PROBLEM
=====
input : string
output : string

rules :
input string contains characters :: can be any character
output string contains one character
  the character that occurs least frequently in the input string
  case insensitive
  if multiple chars have same # of min occur, then return first occurring char
  spaces and special chars are included in this counting
  return char is in lowercase form

EXAMPLE
=====
'Hello World' => 'h'
'Mississippi" => 'm'
'Happy birthday!' => ' '
'aaaaaaAAAA' => 'a'

DATA STRUCTURE
=====
arrays, objects, strings*

ALGORITHM
=====
declare function `leastCommonChar` with parameter `inputString`

declare variable `charCounts` and init with empty object :: helper
iterate through all characters of input string
  add each character as property of `charCounts`
  value of that property will be how many times char occurs in `inputString`
end iteration

declare variable `minCount` and init with minimum count value :: helper

declare variable `candidates` and init with empty array
iterate through values of `charCounts`
  if value is equal to `minCount`
    add corresponding property (letter) to `candidates`
end iteration

iterate through letters in `candidates`
  find the letter that has the lowest first occurrence index
  return letter
end iteration

*/

function getMinCount(obj) {
  let values = Object.values(obj);
  return Math.min(...values);
}

function countChars(str) {
  let charCounts = {};
  for (let char of str) {
    charCounts[char] = charCounts[char] + 1 || 1;
  }
  return charCounts;
}

function getCandidates(obj, mincount) {
  let candidates = [];
  let pairs = Object.entries(obj);
  for (let pair of pairs) {
    if (pair[1] === mincount) candidates.push(pair[0]);
  }
  return candidates;
}

function getLowestIndex(candidates, string) {
  let indexes = [];
  for (let letter of candidates) {
    let ind = string.indexOf(letter);
    indexes.push(ind);
  }
  return Math.min(...indexes);
}

function leastCommonChar(inputString) {
  let lowetString = inputString.toLowerCase();
  let charCounts = countChars(lowetString);
  let minCount = getMinCount(charCounts);

  let candidates = getCandidates(charCounts, minCount);
  let lowestIndex = getLowestIndex(candidates, lowetString);

  let lowestChar = inputString[lowestIndex].toLowerCase();
  return lowestChar;

}

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');