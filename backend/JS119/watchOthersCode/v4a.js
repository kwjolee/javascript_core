/* 8 minutes

PROBLEM
=====
input : array of strings
output : string

rules : 
input array can have any number of strings
output string is the longest common prefix string amonst all input array's strings
if no common prefix, return empty string

EXAMPLE
=====
'flower', 'flow', 'flight' => 'fl'
'dog', 'racecar', 'car' => ''

DATA STRUCTURE
=====
string

ALGORITHM
=====
declare function `longestCommonPrefix` with parameter `arr`
declare variable `commonPrefix` and init with empty string
iterate through all characters of the first element of `arr` (this is a string)
  if character of first element exists in all elements
    add character to `commonPrefix`
    move to next character
  if not, exit iteration
end iteration
return `commonPrefix`

*/

function longestCommonPrefix(arr) {
  let commonPrefix = '';
  for (let ind = 0; ind < arr[0].length; ind += 1) {
    let char = arr[0][ind];
    if (arr.every(val => val[ind] === char)) commonPrefix += char;
    else break;
  }
  return commonPrefix;
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']) === 'fl');
console.log(longestCommonPrefix(['dog', 'racecar', 'car']) === '');
console.log(longestCommonPrefix(['interspecies', 'interstellar', 'interstate']) === 'inters');
console.log(longestCommonPrefix(['throne', 'dungeon']) === '');
console.log(longestCommonPrefix(['throne', 'throne']) === 'throne');
