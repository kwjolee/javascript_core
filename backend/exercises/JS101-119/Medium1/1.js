/* 8 minutes

PROBLEM
=====
input : array of any values
output : array where the first element of the input array is moved to the end

- do not modify the original array
- if input is not an array, return `undefined`
- if input is empty array, return an empty array

EXAMPLE
=====
[] => []
1 => undefined
[1, 2, 3, 4] => [2, 3, 4, 1]

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `rotateArray`
check if input is an array
  if no, return `undefined`
  if yes, check if array is empty
    if yes, return empty array
    if no, then do the following
declare variable `outArr` and initialize it with a shallow copy of input array
declare variable `firstEl` and initialize it with:
  remove first element of `outArr`
add `firstEl` to the end of `outArr`
return `outArr`

*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];

  let outArr = arr.slice();
  let firstEl = outArr.shift();
  outArr.push(firstEl);

  return outArr;
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
console.log(array);                                 // [1, 2, 3, 4]