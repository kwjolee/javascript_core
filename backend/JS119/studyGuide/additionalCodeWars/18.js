/* 7 minutes

PROBLEM
=====
input : string
output : string

rules :
output string converts input string
  such that every other character of every word is capitalized
    first char is uppercase
    second char is lowercase
    then alternate

input string may contain multiple words
  each word is separated by space

for each new word, start the indexing over
  every first char of every word is uppercase
  every second char of every word is lowercase
  ...

EXAMPLE
=====
"String" => "StRiNg"
"Weird string case" => "WeIrD StRiNg CaSe"

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `toWeirdCase` with parameter `string`

split `string` into array of words :: words are separated by spaces

iterate through every word in word array
  first char is uppercase
  second char is lowercase
  alternate and repeat
  once word conversion is complete
    reassign word in word array with new word
end iteration

join word array into single string using space as delimeter

return joined string

*/

function toWeirdCase(string) {
  let wordArray = string.split(" ");
  let convertedArray = [];

  for (let word of wordArray) {
    let newWord = "";
    for (let ind = 0; ind < word.length; ind += 1) {
      let letter = word[ind];
      if (ind % 2 === 0) newWord += letter.toUpperCase();
      else newWord += letter.toLowerCase();
    }
    convertedArray.push(newWord);
  }

  return convertedArray.join(" ");
}

