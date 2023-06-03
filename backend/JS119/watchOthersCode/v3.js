/* 20 minutes

PROBLEM
=====
input : two strings
output : boolean

rules:
if there is a substring that appears in both input strings
  return `true`
otherwise return `false`

a valid substring is longer than one letter
case does not matter
if one of the input strings is empty, then return `false`
numerical characters count as valid characters

?? what about whitespaces

EXAMPLE
=====
'Something', 'Fun' => `false`
'Something', 'Home' => `true`
'' , 'Something' => `false`

DATA STRUCTURES
=====
arrays

ALGORITHM
=====
general idea:
get a list of all valid substrings of the first input string
get a list of all valid substrings of the second input string
if there is at least one overlapping substring in both lists
  return `true`
otherwise return `false`


* helper function :: compare lists
input : two arrays
output : boolean
algorithm:
iterate through first input array elements
  check if that element exists in second input array
    if yes, return `true`
    if not, move to next element of first input array
return `false`

* helpder function :: get list of valid substrings
input : string
output : array of substrings
  valid substring is at least 2 characters long
algorithm:
declare empty array
iterate starting from the first character of input string
  get all possible substrings using the remaining characters
    include at least the following character
      add each substring to array
  once all possible substrings are acquired
    drop the first character and repeat with the remaining characters
return array

* main function
declare function `substringTest` with parameters `string1`, `string2`
declare variable `substrings1` and init with list of valid substrings of `string1`
declare variable `substrings2` and init with list of valid substrings of `string2`
  => how to get list of valid substrings :: helper function
check if `substrings1` and `substrings2` have common substring
  => how to check two lists for common element :: helper function
if common substring exists
  return `true`
otherwise
  return `false`

*/

function substringTest(string1, string2) {
  // if (string1 === "" || string2 === "") return false;
  let substrings1 = getSubstrings(string1.toLowerCase());
  let substrings2 = getSubstrings(string2.toLowerCase());
  return compareLists(substrings1, substrings2);
}

console.log(substringTest('Something', 'Fun') === false);
console.log(substringTest('Something', 'Home') === true);
console.log(substringTest('Something', 'Fun') === false);
console.log(substringTest('Something', '') === false);
console.log(substringTest('', 'Something') === false);
console.log(substringTest('BANANA', 'banana') === true);
console.log(substringTest('test', 'lllt') === false);
console.log(substringTest('', '') === false);
console.log(substringTest('1234567', '541265') === true);

function getSubstrings(string) {
  let outArray = [];
  while (string.length > 1) {
    let chars = string.length;
    while (chars > 1) {
      outArray.push(string.slice(0, chars));
      chars -= 1;
    }
    string = string.slice(1);
  }
  return outArray;
}

// console.log(getSubstrings('Home'));

function compareLists(array1, array2) {
  for (let val of array1) {
    if (array2.includes(val)) return true;
  }
  return false;
}

// console.log(compareLists([1, 2], [3]));

