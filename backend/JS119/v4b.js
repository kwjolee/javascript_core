/* 13 minutes

PROBLEM
=====
input : array of integers
output : number

rules:
output number is the index position of the input array
  at which the "left sum" is equal to the "right sum"
  direction sum means all integers to that side of the index, summed
    does not include the index position's value itself
empty arrays sum to 0
if no such index exists, return `-1`

EXAMPLE
=====
[1, 2, 3, 4, 3, 2, 1] => 3 :: 1 + 2 + 3 === 3 + 2 + 1
[20, 10, -80, 10, 10, 14, 35] => 0 :: 0 === 20 + 10 + -80 + 10 + 10 + 14 + 35;

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function findEvenIndex with parameter arr
declare variable `indexVal` and init to 0
compare subarray to left of `indexVal` (at indexVal 0 this is []) to subarray to right of indexVal
  if equal, return index value
  if not, increment index value by 1
repeat until end of array is reached
if not already returned, return -1

*/

function findEvenIndex(arr) {
  let indexVal = 0;
  while (indexVal < arr.length) {
    let leftArr = arr.slice(0, indexVal);
    let rightArr = arr.slice(indexVal + 1);
    let leftSum = leftArr.reduce((acc, val) => acc + val, 0);
    let rightSum = rightArr.reduce((acc, val) => acc + val, 0);
    if (leftSum === rightSum) return indexVal;
    indexVal += 1;
  }
  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3);
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]) === 1);
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]) === -1);
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]) === 3);
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]) === 0);
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]) === 6);
console.log(findEvenIndex([-1, -2, -3, -4, -3, -2 , -1]) === 3);