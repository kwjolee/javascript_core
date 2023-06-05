/* 8 minutes

PROBLEM
=====
input : string and array
output : array

rules:
input string is a word
input array contains words

output array contains
  words from the input array
    that are anagrams of the input string

if input array does not contain anagrams of input string
  output empty array

EXAMPLE
=====
'abba', ['aabb', 'abcd', 'bbaa', 'dada'] => ['aabb', 'bbaa']
'laser', ['lazing', 'lazy',  'lacer'] => []

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `anagrams` with parameters `word`, `words`

declare variable `anagramWords` and init with empty array

iterate through every element of input array
  check if element is an anagram of input string :: helper
    if yes, add element to `anagramWords`
end iteration

return `anagramWords`
*/

function anagrams(word, words) {
  let anagramWords = [];

  for (let candidate of words) {
    if (isAnagram(candidate, word)) anagramWords.push(candidate);
  }

  return anagramWords;
}

function isAnagram(candidate, word) {
  let candidateSorted = candidate.split("").sort().join("");
  let wordSorted = word.split("").sort().join("");
  if (candidateSorted === wordSorted) return true;
  return false;
}


/*
if sorted candidate === sorted word
then is anagram
*/