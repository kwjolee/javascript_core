/* 28 minutes

PROBLEM
=====
input : string
output : array

rules :
output array contains the top 3 most frequently occuring word in input string
  ordered in descending order of occurrence

a word may or may not have "'"
"'" can appear anywhere in the word
besides alphabets and "'", all other characters are treated as whitespace
matching is case insensitive
return array contains lowercase version of words
ties may be broken arbitrarily // codewars tests are set up to prioritize first-occurring words
if a string contains fewer than 3 uniq words
  return only the occurring words (length < 3)

?? more than one space between words :: merge to one space
?? string filters to just "'" :: do not treat as word

EXAMPLE
=====

DATA STRUCTURE
=====
arrays, object

ALGORITHM
=====
declare function `topThreeWords` with parameter `text

reduce all multi-whitespaces in `text` to single whitespace

remove all special characters from `text`

separate `text` into array of `words` using space as delimiter

declare variable `counts` and init with empty object

iterate through every word of `words`
  `count` how many times word occures in `words`
    ignore case
  add property of word to `counts` (in lowercase form)
    with value of `count`
end iteration

declare variable `outArr` and init with empty array

iterate through every value of `counts`
  if value is top 3 in occurrence :: helper
    add corresponding property to `outArr`
end iteration

sort `outArr` by occurrence frequency

return subarray of `outArr` that maximally has the first 3 elements
*/

function topThreeWords(text) {
  text = text.replace(/  +/g, " ");

  let words = text.split(" ");

  let counts = {};

  for (let word of words) {
    word = word.replace(/[^a-z']/gi, "").toLowerCase();
    if (word !== "" && word !== "'") counts[word] = counts[word] + 1 || 1;
  }

  let occurrences = Object.values(counts);

  let outArr = [];

  for (let keyName of Object.keys(counts)) {
    let count = counts[keyName];
    if (isTopThree(count, occurrences)) {
      outArr.push([keyName, count]);
    }
  }

  let outArrSort = outArr.sort((a, b) => b[1] - a[1]).map(subArr => subArr[0]);

  return outArrSort.slice(0, 3);
}

/*
input : array of frequencies, frequency
output : boolean
if a given frequency is top 3 in a list of frequencies
  return `true`
if not
  return `false`

sort list of frequencies in descending order
  if it's one of the first three then it's top 3
if list is length <= 3 then automatically top 3
*/
function isTopThree(val, arr) {
  if (arr.length < 4) return true;
  let sortArr = arr.slice().sort((a, b) => b - a);
  if (sortArr.indexOf(val) < 3) return true;
  return false;
}

// console.log(topThreeWords("The doll ate with the CD into the CD "));
console.log(topThreeWords("c c c  a  a a  d d d d  e e e e e")); // ['e','d','a'])
// console.log(topThreeWords("a a c b b")); // ['a','b','c']
// console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")); // ['e','ddd','aa']
// console.log(topThreeWords("  //wont won't won't ")); // ["won't", "wont"]
// console.log(topThreeWords("  , e   .. ")); // ["e"]
// console.log(topThreeWords("  ...  ")); // []
// console.log(topThreeWords("  '  ")); // []
// console.log(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.`)); // ['a','of','on']