/* 13 minutes

PROBLEM
=====
input : string
output : string

rules:
input string is a string of word
  words are separated by spaces (not necessarily single space)
  there may be leading or trailing spaces
output string is input string hashtagged
  hashtagged means:
    every word of input string has the first letter capitalized
    ?? what if non first letter is already uppercased
    add "#" to the beginning of string
    must be 140 chars or fewer
    cannot be empty string

EXAMPLE
=====
"Hello there thanks" => "#HelloThereThanks"
"   Hello     World   " => "#HelloWorld"
"" => `false`

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `generateHashtag` with parameter `str`

if `str` is empty, then return `false`

remove leading and trailing spaces from `str`

reduce all instances of multiple whitespaces in `str` into single whitespace

declare variable `hashWord` and init with empty array

iterate through every word of `str`
  capitalize first letter of word
    add to `hashWord`
end iteration

convert `hashWord` into single string by joining its elements together

add "#" to beginning of converted string
  if length is greater than 140, return `false`
  if not, return this hashtagged string
*/

function generateHashtag(str) {
  const LENGTH_LIMIT = 140;

  str = str.trim();
  while (str.includes("  ")) {
    str = str.replace("  ", " ");
  }

  if (str === '') return false;

  let hashWord = [];
  let strArr = str.split(" ");

  for (let word of strArr) {
    let newWord = word[0].toUpperCase() + word.slice(1);
    hashWord.push(newWord);
  }

  let hashString = hashWord.join("");
  let hashTag = "#" + hashString;

  if (hashTag.length > LENGTH_LIMIT) return false;
  return hashTag;
}

console.log(generateHashtag("") === false);
console.log(generateHashtag(" ".repeat(200)) === false);
console.log(generateHashtag("Do We have A Hashtag") === "#DoWeHaveAHashtag");
console.log(generateHashtag("Codewars") === "#Codewars");
console.log(generateHashtag("Codewars Is Nice") === "#CodewarsIsNice");
console.log(generateHashtag("Codewars is nice") === "#CodewarsIsNice");
console.log(generateHashtag("code" + " ".repeat(140) + "wars") === "#CodeWars");
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat") === false);
console.log(generateHashtag("a".repeat(139)) === "#A" + "a".repeat(138));
console.log(generateHashtag("a".repeat(140)) === false);
