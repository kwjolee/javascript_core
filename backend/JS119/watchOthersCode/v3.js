/*

PROBLEM
=====
input : two strings
output : boolean

rules:
if there is a substring that occurs in both input strings
  return true
if not
  return false

only regard substrings that are longer than 1 char long

?? is the full string considered a substring of itself // yes
?? case sensitivity // not sensitive
?? non alpha characters // all considered chars
?? spaces // no example covers spaces within string // consider spaces to be chars

EXAMPLE
=====
Something, Home => true :: ome
Something, Fun => false
Something, "" => false
"", Something => false
BANANA, banana => true :: full string
1234567, 541265 => true :: 12

DATA STRUCTURE
=====
array : list of valid substrings

ALGORITHM
=====
declare function `substringTest` with parameters `inputStr1`, `inputStr2`

if either `inputStr1` or `inputStr2` is less than 2 chars long
  return false

reassign `inputStr1` and `inputStr2` with lowercase forms of themselves

declare variable `substringsInp1` and init with list of valid substrings of `inputStr1` :: helper

iterate through every `substring` of `substringsInp1`
  if `substring` occurs in `inputStr2`
    return true
end iteration

return false
*/

function substringTest(inputStr1, inputStr2) {
  if (inputStr1.length < 2 || inputStr2.length < 2) return false;

  inputStr1 = inputStr1.toLowerCase();
  inputStr2 = inputStr2.toLowerCase();

  let substringsInp1 = getValidSubstrings(inputStr1);

  for (let substring of substringsInp1) {
    if (inputStr2.includes(substring)) return true;
  }
  return false;
}

console.log(substringTest("supercalifragilisticexpialidocious", "SoundsOfItIsAtrociou"))

/* helper : get list of valid substrings
input : string
output : array

return array is list of valid substrings
must be at least 2 char long
can include full string as substring
*/

function getValidSubstrings(string) {
  let substrings = [];
  const VALID_LENGTH = 2;
  for (let ind1 = 0; ind1 < string.length; ind1 += 1) {
    for (let ind2 = ind1 + 1; ind2 < string.length + 1; ind2 += 1) {
      let substring = string.slice(ind1, ind2);
      if (substring.length >= VALID_LENGTH) {
        substrings.push(substring);
      }
    }
  }
  return substrings;
}
