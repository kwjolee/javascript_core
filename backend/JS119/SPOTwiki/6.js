/* 30 minutes

PROBLEM
=====
input : string
output : number

rules :
input string is a string of integers
output number represents
  how many substrings can be made that are odd numbers

EXAMPLE
=====
"1341" -> 1, 3, 1, 13, 41, 341, 1341 :: 7
"1357" -> 1, 3, 5, 7, 13, 35, 57, 135, 357, 1357 :: 10

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `solve` with parameter `s`

declare variable `substrings` and init with array of substrings :: helper

count how many strings in `substrings` evaluate to an odd number

return that count

helper :: getSubstrings
input : string
output : array
algo
====
start at first character of string
  then
*/

function solve(s) {
  let substrings = getSubstrings(s);
  let oddStrings = substrings.filter(val => {
    let lastDigit = Number(val[val.length - 1]);
    if (lastDigit % 2 !== 0) return true;
    return false;
  });
  return oddStrings.length;
}

function getSubstrings(str) {
  let substrings = [];
  for (let ind1 = 0; ind1 < str.length; ind1 += 1) {
    for (let ind2 = ind1 + 1; ind2 < str.length + 1; ind2 += 1) {
      substrings.push(str.slice(ind1, ind2));
    }
  }
  return substrings;
}

console.log(solve("562673366772258874839759592566859661979647476139"));