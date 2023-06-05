/* 7 minutes

PROBLEM
=====
input : string
output : string

rules:
output string converts the input string by
  replacing every character of input string with
    position in the alphabet
every alphabet position (number) is separated by a space

if char is not an alphabet, then ignore

case insensitive

EXAMPLE
=====
T => 20
t = > 20
a => 1

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `alphabetPosition` with parameter `text`

declare variable `alphaArr` and init with empty array

iterate through every character of `text`
  if character is not alphabet, move to next character
  find the alphabet position of character
    add to end of `alphaArr`
end iteration

convert `alphaArr` into single string by joining the elements with " " as delimiter

return the converted string
*/

function alphabetPosition(text) {
  let alphaArr = [];

  for (let char of text) {
    if (char.toLowerCase() === char.toUpperCase()) continue;
    let pos = char.toLowerCase().charCodeAt() - 96;
    alphaArr.push(pos);
  }

  let alphaStr = alphaArr.join(" ");

  return alphaStr;
}

console.log(alphabetPosition("sunset"))