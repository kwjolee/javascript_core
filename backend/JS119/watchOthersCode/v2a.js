/*

PROBLEM
=====
input : string
output : boolean

rules:
if the input string can be reconstructed by
  appending multiple copies of it substring
    return true
if not
  return false

?? is a string also a substring of itself :: no

EXAMPLE
=====
"abab" => true : ab twice
"aba" => false : aba is not a valid substring of aba

DATA STRUCTURE
=====
arrays : list of substrings

ALGORITHM
=====
declare function `repeatedSubstringPattern` with parameter `inputStr`

declare variable `substrings` and init with array of substrings of `inputStr` :: do not include `inputStr` itself

iterate through every `substring` of `substrings`
  if `substring` can be repeated any number of times to make `inputStr`
    return true
      repeating of `substring` stops if the repeated substring length is greater than inputstr
end iteration
return false
*/

function repeatedSubstringPattern(inputStr) {
  let substrings = [];

  for (let ind1 = 0; ind1 < inputStr.length - 1; ind1 += 1) {
    for (let ind2 = ind1 + 1; ind2 < inputStr.length; ind2 += 1) {
      let substring = inputStr.slice(ind1, ind2);
      if (substring !== inputStr) {
        substrings.push(substring);
      }
    }
  }

  for (let substring of substrings) {
    let newWord = substring;
    let repeat = 1;
    while (newWord.length < inputStr.length) {
      newWord = substring.repeat(repeat);
      if (newWord === inputStr) return true;
      repeat += 1;
    }
  }
  return false;
}

console.log(repeatedSubstringPattern("abab") === true);
console.log(repeatedSubstringPattern("aba") === false);
console.log(repeatedSubstringPattern("aabaaba") === false);
console.log(repeatedSubstringPattern("abaababaab") === true);
console.log(repeatedSubstringPattern("abcabcabcabc") === true);
