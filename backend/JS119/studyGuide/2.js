/* 9 minutes

PROBLEM
=====
input : array
output : number or `null`

rules : 
input array contains integers
sum 5 consecutive elements of the array
  output the minimum of these sums
if input array is less than 5 elements, then return `null`

?? input array has length 5 :: return sum

EXAMPLE
=====
[1, 2, 3, 4] => null since length < 5
[1, 2, 3, 4, 5, 6] => 15 since 15 < 20

DATA STRUCTURE
=====
arrays

general idea:
get subarrays of length 5 then get sum
return min sum

ALGORITHM
=====
declare function `minimumSum` with parameter `inputArr`

if `inputArr` length is less than 5, return `null`

declare variable `allSums` and init with empty array

iterate through `inputArr` for each subArray of length 5
  subArray must contain consecutive elements of `inputArr`
  get sum of subArray and add to `allSums`
end iteration

return the minimum value of `allSums`
*/

function minimumSum(inputArr) {
  if (inputArr.length < 5) return null;

  let allSums =  [];

  for (let ind = 0; ind < inputArr.length - 4; ind += 1) {
    let subArray = inputArr.slice(ind, ind + 5);
    let subSum = subArray.reduce((acc, val) => acc + val, 0);
    allSums.push(subSum);
  }

  let minSum = Math.min(...allSums);

  return minSum;
}

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);