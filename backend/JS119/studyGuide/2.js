/* 8 minutes

PROBLEM
=====
input : array
output : number or `null`

rules:
input array contains integers
output number is determined by
  sum 5 consecutive elements of input array
    minimum sum across the full input array
if input array has less than 5 elements
  return `null`

EXAMPLES
=====
[1, 2, 3, 4] => `null`
[1, 2, 3, 4, 5, -5] => [15, 9] => 9
[] = > `null`

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `minimumSum` with parameter `inputArr`

if length of `inputArr` is less than 5
  return `null`

declare variable `sums` and init with empty array

iterate through subarrays of `inputArr`
  `subArray` contains 5 consecutive elements of `inputArr`
    5 consecutive index positions
  sum the elelment values of `subArray`
  add this sum to the end of `sums`
end iteration

return the minimum value of `sums`
*/

function minimumSum(inputArr) {
  if (inputArr.length < 5) return null;

  let sums = [];

  for (let ind = 0; ind < inputArr.length - 4; ind += 1) {
    let subArray = inputArr.slice(ind, ind + 5);
    let sum = subArray.reduce((acc, val) => acc + val, 0);
    sums.push(sum);
  }

  return Math.min(...sums);
}


console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]));