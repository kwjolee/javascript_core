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
ties may be broken arbitrarily
if a string contains fewer than 3 uniq words
  return the other words

?? more than one space between words

EXAMPLE
=====

DATA STRUCTURE
=====
arrays, object

ALGORITHM
=====
declare function `topThreeWords` with parameter `text

reduce all multi-whitespaces in `text` to single whitespace

separate `text` into array of `words`

declare variable `counts` and init with empty object

iterate through every word of `words`
  `count` how many times word occures in `words`
    ignore special characters except "'"
    ignore case
  add property of word to `counts` (in lowercase form)
    with value of `count`
end iteration

declare variable `outArr` and init with [];

iterate through every value of `counts`
  if value is top 3 in occurrence
    add corresponding property to `outArr`
end iteration

sort `outArr` by occurrence frequency then return
*/

// eslint-disable-next-line max-lines-per-function
function topThreeWords(text) {
  while (text.includes("  ")) {
    text = text.replace("  ", " ");
  }

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

console.log(topThreeWords("A rat bolted of the CD on the doll"));

function isTopThree(val, arr) {
  if (arr.length < 4) return true;
  let sortArr = arr.slice().sort((a, b) => b - a);
  if (sortArr.indexOf(val) < 3) return true;
  return false;
}
