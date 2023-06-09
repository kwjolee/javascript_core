/*

//1
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Note:
// All given inputs are in lowercase letters a-z.

*/

/*

PROBLEM
=====
input : array
output : string

rules:
the output string is constructed by
  finding the longest common prefix string
    amongst all strings in the input array

if no common prefix is found
  return an empty string

the full word is considered a prefix if the words are complete match
  return full word in this case

?? what if the input array is empty? :: examples do not cover // probably return empty string
?? case sensitive? :: no, all lowercase a-z

EXAMPLE
=====
flower, flow, flight => fl
dog, racecar, car => ""
interspecies, interstellar, interstate => inters

DATA STRUCTURE
=====
arrays?

ALGORITHM
=====
declare function `commonPrefix` with parameter `inputArr`

declare variable `templateString` and init with the first element (string) of `inputArr`

declare variable `prefixes` and init with empty string

iterate through every index position of `templateString`
  if the character at this index position occurs
    at every string in the input array
      at the same index position
        add this character to the end of `prefixes`
end iteration

return `prefixes`

*/

function commonPrefix(inputArr) {
  if (inputArr.length === 0) return "";

  let templateString = inputArr[0];

  let prefixes = "";

  for (let ind = 0; ind < templateString.length; ind += 1) {
    let char = templateString[ind];
    if (inputArr.every(val => val[ind] === char)) {
      prefixes += char;
    } else {
      break;
    }
  }

  return prefixes;
}


// Test Cases
console.log(commonPrefix(["flower", "flow", "fliwht"]) === "fl"); // true
console.log(commonPrefix(["dog", "racecar", "car"])  === ""); // true
console.log(commonPrefix(["interspzcies", "interstzllar", "interstzte"])  === "inters"); // true
console.log(commonPrefix(["throne", "dungeon"]) === ""); // true
console.log(commonPrefix(["throne", "throne"]) === "throne"); // true
