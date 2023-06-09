/* 9 minutes

PROBLEM
=====
input : array
output : array

rules:
move the first element of the input array
  to the end of the input array
return this modified array
  do not mutate the original input array

if input is not an array, return undefined
if input is an empty array, return empty array
?? is this empty array the same array as the input array or is it a new empty array?
  worry about it later

EXAMPLE
=====
[7, 3, 5, 2, 9, 1] => [3, 5, 2, 9, 1, 7]
[] => []
"a" => undefined

DATA STRUCTURE
=====
array : copy of input array

ALGORITHM
=====
declare function `rotateArray` with parameter `inputArr`

if `inputArr` is not an array
  return undefined
if `inputArr` is empty
  return empty array ** new empty array or original input array that is empty?

declare variable `outputArr` and init with shallow copy of `inputArr`

declare variable `removed` and init with
  remove the first element of `outputArr`

add `removed` to the end of `outputArr`

return `outputArr`
*/

function rotateArray(inputArr) {
  if (!Array.isArray(inputArr)) return undefined;
  if (inputArr.length === 0) return inputArr;

  let outputArr = inputArr.slice();

  let removed = outputArr.shift();
  outputArr.push(removed);

  return outputArr;
}

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]