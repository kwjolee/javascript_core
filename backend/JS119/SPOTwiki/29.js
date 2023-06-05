/* 8 minutes

PROBLEM
=====
input : string
output : array

rules:
output array's elements are:
  input string split into strings of 2 characters
    if the final string only has one character
      add underscore to make it 2 chars

split into 2 chars beginning from the start of the string

?? input is empty string => []

EXAMPLE
=====
"" => []
'abc' => ['ab', 'c_']
'abcdef' => ['ab, 'cd', 'ef']

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `solution` with parameter `str`

declare variable `splitStr` and init with empty array

iterate through every other index position of `str`
  if current index position is final index position
    get char at current index position
      add "_" to end
        add this 2-char string to `splitStr`
  get the characters and current index position and next index position
    add this 2-char string to `splitStr`
end iteration

return `splitStr`
*/

function solution(str) {
  let splitStr = [];

  for (let ind = 0; ind < str.length; ind += 2) {
    let currChar = str[ind];
    let pairChar;
    if (ind === str.length - 1) {
      currChar = str[ind];
      pairChar = currChar + "_";
    } else {
      let nextChar = str[ind + 1];
      pairChar = currChar + nextChar;
    }
    splitStr.push(pairChar);
  }
  return splitStr;
}

console.log(solution(""));