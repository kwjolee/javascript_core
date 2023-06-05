/* 12 minutes

PROBLEM
=====
input : two strings
output : number

rules:
output number represents
  how many letters must be removed from the two input strings
    to make them anagrams
  this is the combined removed letter count from both input strings

empty arrays are anagrams : remove 0


EXAMPLE
=====
"codewars"   => remove 4 to get cear
"hackerrank" => remove 6 to get cear
total of 10 removed

"ab" => remove 2 to get ""
"cd" => remove 2 to get ""
total of 4 removed

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `anagramDifference` with parameters `w1` and `w2`

declare variables `arr1` and `arr2` and init with
  elements of each `arr` being the letters of each `w`

declare variable `commons` and init with empty array

iterate through every element of `arr1`
  if element exists in `arr2`
    add element to `commons`
    remove element from `arr2`
end iteration

length of `w1` - length of `common` is how many chars to remove from `w1`
length of `w2` - length of `common` is how many chars to remove from `w2`
  above two numbers summed is the output value

*/

function anagramDifference(w1, w2) {
  let arr1 = w1.split("");
  let arr2 = w2.split("");

  let commons = [];

  for (let letter of arr1) {
    let w2Ind = arr2.indexOf(letter);
    if (w2Ind !== -1) {
      commons.push(letter);
      arr2.splice(w2Ind, 1);
    }
  }

  let remArr1 = w1.length - commons.length;
  let remArr2 = w2.length - commons.length;
  return remArr1 + remArr2;
}

console.log(anagramDifference("ab", "cd"));