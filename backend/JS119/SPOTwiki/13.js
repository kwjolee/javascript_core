/* 13 minutes

PROBLEM
=====
input : string
output : string

rules:
input string is camel cased
output string is the input string converted to kebab case
  output string only contains lowercase letters

if input string contains non alphabetic characters
  those characters are discarded

camel case => kebab case
  every letter is converted to lowercase letter
  every uppercase letter of camel case is converted to
    "-" + lowercase letter

EXAMPLE
=====
"CAMEL" -> c-a-m-e-l
"camelsHaveThreeHumps" -> camels-have-three-humps
"camelsHave3Humps" -> camels-have-humps

DATA STRUCTURE
=====
arrays? strings

ALGORITHM
=====
declare function `kebabize` with parameter `str`

declare variable `kebabArr` and init with empty array

declare variable `candidate` and init with empty string

iterate through every character of `str`
  if character is not alphabetical
    move to next character
  if character is lowercase
    add character to `candidate`
    move to next character
  if character is uppercase
    add `candidate` to `kebabArr`
    reassign candidate with lowercase character
    move to next character
end iteration

add `candidate` to `kebabArr`

convert `kebabArr` to string by joining with "-" as delimiter

return the converted string
*/

function kebabize(str) {
  let kebabArr = [];
  let candidate = "";

  for (let char of str) {
    if (char.toLowerCase() === char.toUpperCase()) continue;
    if (char === char.toLowerCase()) {
      candidate += char;
    } else {
      if (candidate !== "") kebabArr.push(candidate);
      candidate = char.toLowerCase();
    }
  }
  kebabArr.push(candidate);

  let kebabStr = kebabArr.join("-");

  return kebabStr;

}
