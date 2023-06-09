/* 7 minutes

PROBLEM
=====
input : two arrays
output : array

first input array contains values
second input array contains values
  they do not necessarily contain the same values

output array is constructed by
  filter the first input array by
    remove any element of first input array
      that also exists in second input array

EXAMPLE
=====
[1, 2], [1] => [2]
[1, 2, 2, 2, 3], [2] => [1, 3]
[], any => []
any, [] => first input array
[1, 2, 3], [1, 2] => [3]

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `arrayDiff` with parameters `a`, `b`

declare variable `outArray` and init with empty array

iterate through every `val`ue of `a`
  if `val` exists in `b`
    move to next `val`
  if not
    add `val` to the end of `outArray`
end iteration

return `outArray`
*/

function arrayDiff(a, b) {
  const outArray = [];

  for (let val of a) {
    if (!b.includes(val)) {
      outArray.push(val);
    }
  }

  return outArray;
}

console.log(arrayDiff([1, 2, 3], [1, 2])); 