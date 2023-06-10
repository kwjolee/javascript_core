/*

PROBLEM
=====
input : two strings
output : boolean

rules:
the second input string is to be made using
  the characters of the first input string
if this is possible, return `true`
if not, return `false`

EXAMPLE
=====
'javaass', 'jjss' => false
'rkqodlw', 'world' => true
'scriptjava', 'javascript' => true
'scriptingjava', 'javascript' => true


DATA STRUCTURE
=====
array : characters of the first input string
array: characters of the second input string

ALGORITHM
=====
declare function `scramble` with parameters `str1`, `str2`

declare variable `arr1` and init with characters of the first input string
declare variable `arr2` and init with characters of the second input string

iterate through every character of `arr1`
  if this character occurs in `arr2`
    remove the first occurrence of that character from arr2
end iteration

if `arr2` is empty
  return true
if not
  return false
*/

function scramble(str1, str2) {
  let arr1 = str1.split("");
  let arr2 = str2.split("");

  for (let char of arr1) {
    let ind = arr2.indexOf(char);
    if (ind > -1) {
      arr2.splice(ind, 1);
    }
  }

  return arr2.length === 0;
}

console.log(scramble("javaass", "jjss"));
console.log(scramble("rkqodlw", "world"));
console.log(scramble("cedewaraaossoqqyt", "codewars"));
console.log(scramble("katas", "steak"));
console.log(scramble("scriptjava", "javascript"));
console.log(scramble("scriptingjava", "javascript"));