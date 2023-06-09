// same as SPOT 22

/*
PROBLEM
=====
input : two strings
output : boolean

rules:
if characters of the first input string can be rearranged
  to make the second input string
    then return `true`
if not
  return `false`

only lowercase letters are used

?? first input string empty :: false
?? second input string empty :: true?
?? both input strings empty :: true?

EXAMPLE
=====
'rkqodlw', 'world' => true
 *  ****

'cedewaraossoqqyt', 'codewars' => true
 *** *** **

'katas', 'steak' => false
 *** *

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `scramble` with parameters `str1` and `str2`

declare variable `needChars` and init with empty object

iterate through every character of second input string
  if `needChars` has a property with the same name as the character
    increment its value by 1
  if not
    add a property with the same name as the character
      set its value as 1
end iteration

declare variable `haveChars` and init with empty object

iterate through every character of first input string
  if `haveChars` has a property with the same name as the character
    increment its value by 1
  if not
    add a property with the same name as the character
      set its value as 1
end iteration

declare variable `needCharList` and init with an array of
  list of uniq characters of second input string

iterate through every character of `needCharList`
  if the value of `needChars` at property of this character is
    greater than the value of `haveChars` at property of this character
      return `false`
end iteration

return `true`

*/

function scramble(str1, str2) {
  let needChars = {};
  for (let char of str2) {
    needChars[char] = needChars[char] + 1 || 1;
  }

  let haveChars = {};
  for (let char of str1) {
    haveChars[char] = haveChars[char] + 1 || 1;
  }

  let needCharList = Object.keys(needChars);

  for (let char of needCharList) {
    let needVal = needChars[char];
    let haveVal = haveChars[char] || 0;
    if (needVal > haveVal) return false;
  }
  return true;
}

console.log(scramble("katas", "steak"));