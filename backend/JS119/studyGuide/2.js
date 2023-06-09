/*

PROBLEM
=====
input : array
output : null or number

rules:
get the sum of 5 consecutive elements of the input array
  return the minimum of these sums

input array only has integers
if input array has less than 5 elements
  return null

EXAMPLE
=====
[1, 2, 3, 4] => null
[1, 2, 3, 4, 5, -5] => 9

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `minimumSum` with parameter `inputArr`

if `inputArr` has length less than 5
  return `null`

declare variable `minSum` and init with Infinity

iterate through every 5-element subarray of `inputArr`
  declare variable `sum` and init with the sum of this subarray
  if `sum` is less than `minSum`
    reassign `minSum` with `sum`
end iteration

return `minSum`
*/

function minimumSum(inputArr) {
  if (inputArr.length < 5) return null;

  let minSum = Infinity;

  for (let ind = 0; ind < (inputArr.length - 4); ind += 1) {
    let subArray = inputArr.slice(ind, ind + 5);
    let sum = subArray.reduce((acc, val) => acc + val, 0);
    if (sum < minSum) minSum = sum;
  }
  return minSum;
}

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);