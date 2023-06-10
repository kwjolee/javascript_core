/*

PROBLEM
=====
input : array
output : number

rules:
output number is the index position of the input array where
  subarray to the left and subarray to the right of that index
    sum to the same value
if no such index position can be found
  return -1

empty subarrays sum to 0;

?? what if multiple index positions are found?
?? what about empty array inputs

EXAMPLE
=====
[1, 2, 3, 4, 3, 2, 1] => 3
[1, 100, 50, -51, 1, 1] => 1

DATA STRUCTURE
=====
array : left side subarray
array : right side subarray

ALGORITHM
=====
declare function findEvenIndex with parameter `inputArr`

iterate through every index position of `inputArr`
  declare variable `leftSub` and init with left side subarray from current index
  declare variable `rightSub` and init with right side subarray from current index
    for both subarrays, do not include the value at current index

  declare variable `leftSum` and init with the sum of values of `leftSub`
  declare variable `rightSum` and init with the sum of values of `rightSub`

  if `leftSum` and `rightSum` are equal
    return current index position
end iteration

return -1
*/

function findEvenIndex(inputArr) {
  for (let ind = 0; ind < inputArr.length; ind += 1) {
    let leftSub = inputArr.slice(0, ind);
    let rightSub = inputArr.slice(ind + 1);

    let leftSum = leftSub.reduce((acc, val) => acc + val, 0);
    let rightSum = rightSub.reduce((acc, val) => acc + val, 0);

    if (leftSum === rightSum) return ind;
  }
  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]));
console.log(findEvenIndex([-1, -2, -3, -4, -3, -2, -1]));
