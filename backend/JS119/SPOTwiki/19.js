/* 15 minutes

PROBLEM
=====
input : one or two strings
output : string

rules:
first input string is the string to convert to title case
second input string is optional
  this contains the list of minor words, separated by space
output string is the first input string converted to title case

if a second argument is not provided, then there is no minor word
first word of the first input string is always capitalized
first input string has words separated by space
title cased means every word has first character capitalized
  except for the specified exceptions
case of the minor word strings is not relevant
  if a minor word matches a word in the first input string, that word is not capitalized
if first input string is empty, then return empty string

EXAMPLE
=====
'the quick brown fox' and no minor word -> 'The Quick Brown Fox'
'a clash of KINGS' and 'a an the of' -> 'A Clash of Kings'
'' and no minor word -> ''

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
* capitalize means make the first character uppercase and the rest lowercase

declare function `titleCase` with parameter `title` and `minorWords`
  default value of `minorWords` is empty string

declare variable `minorArr` and init with `minorWords` split by space

declare variable `titleCased` and init with empty array

iterate through every word of `title`
  if first word
    capitalize word then add to `titleCased`
  if word is one of `minorWords`
    make lowercase then add to `titleCased`
  if word is not one of `minorWords`
    capitalize word then add to `titleCased`
end iteration

join elements of `titleCased` into string using whitespace as delimiter

return the joined string
*/

function titleCase(title, minorWords = '') {
  if (title === '') return '';

  let minorArr = minorWords.split(" ").map(word => word.toLowerCase());

  let titleCased = [];
  let titleArr = title.split(" ");

  for (let ind = 0; ind < titleArr.length; ind += 1) {
    let word = titleArr[ind];
    let newWord;
    if (ind === 0) {
      newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
    } else if (minorArr.includes(word.toLowerCase())) {
      newWord = word.toLowerCase();
    } else {
      newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
    titleCased.push(newWord);
  }

  return titleCased.join(" ");
}

console.log(titleCase('the quick brown fox'));