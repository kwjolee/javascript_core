/* 5 minutes

PROBLEM
=====
input : array
output : string

rules:
input array contains strings
output string is constructed by
  get the nth letter from the nth string in the input array

if input array is empty
  return empty string

EXAMPLE
=====
["yoda", "best", "has"] => "yes"
[] => ""

DATA STRUCTURE
=====
arrays? strings

ALGORITHM
=====
declare function `nthChar` with parameter `words`

declare variable `newWord` and init with empty string

iterate through every element (word) of `words` array
  for the nth element
    get the nth character
      add to `newWord`
end iteration

return `newWord`
*/

function nthChar(words) {
  let newWord = "";

  for (let ind = 0; ind < words.length; ind += 1) {
    let word = words[ind];
    let char = word[ind];
    newWord += char;
  }

  return newWord;
}