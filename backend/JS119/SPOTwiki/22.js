/* 7 minutes slow solution

PROBLEM
=====
input : two strings
output : boolean

first input string contains list of letters
second input string contains word

if letters of first input string can be used to make second input string
  output true
otherwise
  output false

EXAMPLE
=====
"rkqodlw", "world" => true
"katas", "steak" => false

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `scramble` with parameters `str1` and `str2`

declare variable `str1Arr` and init with an array whose elements are the letters of `str1`

iterate through every letter of `str2`
  if letter exists in `str1Arr`
    remove that letter from `str1Arr`
    move to next letter
  if letter does not exist
    return `false`
end iteration

return `true`
*/

function scramble(str1, str2) {
  let str1Arr = str1.split("");

  for (let letter of str2) {
    if (str1Arr.indexOf(letter) !== -1) {
      str1Arr.splice(str1Arr.indexOf(letter), 1);
    } else {
      return false;
    }
  }

  return true;
}

let str1 = "abcdefghijklmnopqrstuvwxyz".repeat(100000);
let str2 = "zyxcba".repeat(90000);

console.log(scramble(str1, str2));