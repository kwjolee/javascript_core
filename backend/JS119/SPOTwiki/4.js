/* 10 minutes

PROBLEM
=====
input : array (of strings)
output : array (of numbers)

rules:
numbers in the output array represent
  for each string in the input array
    count how many letters are in their proper alphabetical positions
      case insensitive
if no letter is in proper position, answer is 0

?? input array is empty           ==> []
?? string in input array is empty ==> 0

EXAMPLE
=====
"abode" => 4
"ABc" => 3
"xyzD" => 1
"xyz" => 0

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `solve` with parameter `arr`

declare variable `newArr` and init with empty array

iterate through every string of `arr`
  count how many characters of string is in proper alpha location :: helper
  add this count to `newArr`
end iteration

return `newArr`

helper :: countAlpha
input : string
output : number (how many chars of string are in alpha location)
algorithm
-----
count = 0
iterate through every index position of characters in input string
  if index position equals alphabetical index position
    increment count
end iteration
return count
*/

function solve(arr) {
  if (arr.length === 0) return [];

  let newArr = [];

  for (let str of arr) {
    let count = countAlpha(str.toLowerCase());
    newArr.push(count);
  }

  return newArr;
}

function countAlpha(str) {
  let count = 0;
  for (let ind = 0; ind < str.length; ind += 1) {
    if (str[ind].charCodeAt() - 97 === ind) count += 1;
  }
  return count;
}

console.log(countAlpha("xyzD"));