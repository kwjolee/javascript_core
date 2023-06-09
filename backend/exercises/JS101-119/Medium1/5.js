/*

PROBLEM
=====
input : string
output : string

rules:
replace the "number word" of the input string with actual digits
return this converted string

words are separated by space

EXAMPLE
=====
five => 5
four => 4
four. => 4.

DATA STRUCTURE
=====
object : pairs of "number words" and their digits

ALGORITHM
=====
declare function `wordToDigit` with parameter `inputStr`

declare variable `wordDigitPair` and init with object:
  properties are all the "number words"
  corresponding values are digits (in string form) // "5" not 5

declare variable `outputStr` and init with `inputStr`

iterate through every property of `wordDigitPair`
  replace the substring in `outputStr` that matches the property
    with the value of that property
  reassign `outputStr` with this updated string

  repeat the above as long as property occurs in `outputStr`
end iteration

return outputStr
*/

function wordToDigit(inputStr) {
  const wordDigitPair = {
    "zero": "0",
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9"
  };

  let props = Object.keys(wordDigitPair);

  let outputStr = inputStr;

  for (let numberWord of props) {
    let digit = wordDigitPair[numberWord];

    while (outputStr.includes(numberWord)) {
      outputStr = outputStr.replace(numberWord, digit);
    }
  }
  return outputStr;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));