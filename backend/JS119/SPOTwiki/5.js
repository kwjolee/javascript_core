/* 7 minutes

PROBLEM
=====
input : string
output : number

rules : 
output number represents
  length of
    longest consecutive vowels in input string

input string only has lowercase letters
input string does not have spaces
vowels are `aeiou`

?? input string empty

EXAMPLE
=====
codewarriors => 2
suoidea => 3

DATA STRUCTURE
=====
arrays?

ALGORITHM
=====
declare function `solve` with parameter `s`

declare variable `vowels` and init with 'aeiou' // list of vowels

declare variable `counts` and init with empty array
declare variable `count` and init with 0

iterate through every letter of `s`
  if letter is vowel
    increment `count` by 1
  if letter is not vowel
    add `count` to `counts`
    set `count` to 0
end iteration

return lowest value in `counts`

*/

function solve(s) {
  const VOWELS = 'aeiou';

  let counts = [];
  let count = 0;

  for (let letter of s) {
    if (VOWELS.includes(letter)) {
      count += 1;
    } else {
      counts.push(count);
      count = 0;
    }
  }

  let minCount = Math.max(...counts);
  return minCount;
}

console.log(solve("codewarriors"));