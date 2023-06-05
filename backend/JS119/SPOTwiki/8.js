/* 20 minutes

PROBLEM
=====
input : string
output : array

rules:
first element of the output array is
  substring of input string such that
second element of output array is
  number of times first element is repeated to create input string
we want the shortest substring to repeat the maximal number of times

the full string counts as a substring
  longest substring in output array will be input string
  lowest number in output array will be 1

input string is not empty

EXAMPLE
=====
"ababab" => ["ab", 3]
"abcde" => ["abcde", 1]

DATA STRUCTURE
=====
arrays (nested?)

ALGORITHM
=====
declare function `f` with parameter `s`

declare variable `candidates` and init with empty array

declare variable `substrings` and init with
  find all substrings of `s` :: helper

iterate through each substring
  check how many times substring must repeat to create input string
    if possible, create array [substring, number of repeats]
      add to `candidates`
    if not possible, move to next substring
end iteration

iterate through `candidates`
  find an entry that has the maximum (number of repeats) value :: helper?
end iteration

return that entry
*/

function f(s) {
  let candidates = [];

  let substrings = getSubstrings(s);

  substrings.forEach(substring => {
    let count = howManyRepeat(substring, s);
    if (count !== -1) {
      candidates.push([substring, count]);
    }
  });

  return findMaxRepeat(candidates);
}


function findMaxRepeat(candidates) {
  let maxRepeat = -Infinity;
  let minSubstring = "";

  for (let candidate of candidates) {
    let substring = candidate[0];
    let repeat = candidate[1];
    if (repeat > maxRepeat) {
      maxRepeat = repeat;
      minSubstring = substring;
    }
  }

  return [minSubstring, maxRepeat];
}

function getSubstrings(str) {
  let substrings = [];
  for (let ind1 = 0; ind1 < str.length; ind1 += 1) {
    for (let ind2 = ind1 + 1; ind2 < str.length + 1; ind2 += 1) {
      substrings.push(str.slice(ind1, ind2));
    }
  }
  return substrings;
}

console.log(getSubstrings("12345"));


function howManyRepeat(subString, targetString) {
  let count = 1;
  let builtString = "";
  while (builtString.length <= targetString.length) {
    builtString = subString.repeat(count);
    if (builtString === targetString) return count;
    count += 1;
  }
  return -1;
}
