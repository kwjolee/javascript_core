/* 9 minutes

PROBLEM
====
input : string
output : string

rules:
output string is the word of input string that has the highest score

scoring happens by adding the alphabet index of each character in word
  a = 1 pt
  b = 2 pt

all letters are lowercase
all inputs will be valid

if multiple words tie in score, return the first occurring string

?? how are words separated in input string :: spaces

EXAMPLE
=====
"abad" score is 8

"aaa b" => "aaa"
"d bb" => "d" // tied score but "d" appears first

DATA STRUCTURE
=====
arrays?

ALGORITHM
=====
declare function `high` with parameter `x`

declare variable `words` with array that contains words of `x` as elements

declare variable `highscore` and init with 0
declare variable `highword` and init with empty string;

iterate through every word of `words`
  compute score of word :: helper
  if score is higher than `highscore`
    reassign `highscore` with this score
    reassign `highword` with this word
end iteration

return `highword`
*/

function high(x) {
  let words = x.split(" ");

  let highscore = 0;
  let highword = "";

  for (let word of words) {
    let score = getScore(word); // helper
    if (score > highscore) {
      highscore = score;
      highword = word;
    }
  }

  return highword;
}

function getScore(word) {
  let score = 0;
  for (let letter of word) {
    let point = letter.charCodeAt() - 96;
    score += point;
  }
  return score;
}

console.log(high('man i need a taxi up to ubud'))