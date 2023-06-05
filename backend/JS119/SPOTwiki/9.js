/* 28 minutes

PROBLEM
=====
input : string
output : string

rules :
input string takes the form
  every word is separated by a space

output string takes the form
  every word is transformed
    first and last chars remain
    punctuations remain in place
    chars between first and last chars sorted alphabetically

special chars do not separate words
special characters do not take the place of chars
four special chars : - ' , .
case insensitive in all strings

EXAMPLE
=====
'i' => 'i'
'me' => 'me'
'you' => 'you'
'-dcba' => '-dbca'
'dcba.' => 'dbca.'
'gotta' => 'gotta'
'dance' => 'dacne'

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `ScrambleWords` with parameter `str`

declare variable `words` and init with
  separate `str` into array of words split by space

declare variable `newWords` and init with empty array

iterate through each `word` of `words`
  if `word` length is 3 or less
    add `word` to `newWords`
  if not (more than 3 chars)
    first and last chars remain in place
    in between characters get sorted alphabetically
    punctuation remain in place :: helper
end iteration

convert `newWords` into single string by joining with spaces, then return
*/

/*
iterate through every character of word
if special character (- ' , .)
  remember character at index position
later, insert this special character at index position
*/

// eslint-disable-next-line max-lines-per-function
function ScrambleWords(str) {
  let newWords = [];
  let words = str.split(" ");
  let punctuation = "-',.";

  for (let word of words) {
    if (word.length < 4) {
      newWords.push(word);
      continue;
    }

    let specChar = [];
    let filtWord = word;
    for (let ind = 0; ind < word.length; ind += 1) {
      let char = word[ind];
      if (punctuation.includes(char)) {
        specChar.push([char, ind]);
        filtWord = filtWord.replace(char, "");
      }
    }
    let midWord = filtWord.slice(1, filtWord.length - 1);
    let sortMidWord = midWord.split("").sort().join("");
    let endWord = filtWord[0] + sortMidWord + filtWord[filtWord.length - 1];
    let endWordArr = endWord.split("");

    let char = specChar[0][0];
    let ind = specChar[0][1];
    endWordArr.splice(ind, 0, char);

    let endWordFin = endWordArr.join("");
    newWords.push(endWordFin);
  }

  let newString = newWords.join(" ");
  return newString;
}

