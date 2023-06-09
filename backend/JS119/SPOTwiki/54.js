/* 14 minutes

PROBLEM
=====
input : two arrays
output : boolean

if the second array's elements (y) are
  squares of the first array's elements (x)
    y occurs as many times as x does
      return `true`
if not
  return `false`

input arrays may be empty :: return `false`
if input arrays are different length : return `false`

EXAMPLE
=====
let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
true

let a1 = [121, 144, 19, 161, 19, 144, 19, 12];
let a2 = [???, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
12*12 does not occur in `a2`
false

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `comp` with parameters `array1` and `array2`

if `array1` and `array2` have different lengths
  return `false`

if either input array is empty
  return `false`

sort both input arrays in ascending order

iterate through every index position of `array1`
  if value of `array1` at that index squared is
    equal to value of `array2` at that index
      move to next index
    if not equal
      return `false`
end iteration

return `true`
*/

function comp(array1, array2) {
  if (array1 === null || array2 === null) return false;
  if (array1.length !== array2.length) return false;
  if (array1.length === 0 && array2.length === 0) return true;
  if (array1.length === 0 || array2.length === 0) return false;

  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);

  for (let ind = 0; ind < array1.length; ind += 1) {
    let val1 = array1[ind];
    let val2 = array2[ind];
    if (val1 ** 2 !== val2) return false;
  }

  return true;
}

console.log(comp([1, 2, 3], [1, 9, 4]));