/* 12 minutes

PROBLEM
=====
input : two arrays
output : boolean

rules:
input arrays have numbers
output array determines if
  second input array's elements are squares of the first input array's elements
  the "squared" value must appear the same number of times as the "unsquared" value

?? if input arrays are different length :: return `false`
EXAMPLE
=====
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// true

121 is 11^2
14641 is 121^2
20736 is 144^2
...

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `comp` with parameters `array1` and `array2`

if `array1` and `array2` differ in length, return `false`

sort both `array1` and `array2` in ascending order
iterate through every element of both arrays
  if first element of `array2` is square of first element of `array1`
    move to next element
  if not, return `false`
end iteration

return `true`
*/

function comp(array1, array2) {
  if (array1 === null || array2 === null) return false;
  if (array1.length !== array2.length) return false;
  if (array1.length === 0 && array2.length === 0) return true;

  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);

  for (let ind = 0; ind < array1.length; ind += 1) {
    let aVal = array1[ind];
    let bVal = array2[ind];
    if (aVal ** 2 !== bVal) return false;
  }

  return true;
}

console.log(comp(null, []));