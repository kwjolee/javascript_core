/* 7 minutes

PROBLEM
=====
input : array
output : number

rules:
if the numbers in the input array to the right of some index position N
  sum to
  the numbers in the input array to the left of some index position N
    return N
if not
  return -1

empty array sum to 0;

EXAMPLE
=====
[1, 2, 3, 4, 3, 2, 1]
 0  1  2  3  4  5  6
    6     *     6

return 3

[1, 100, 50 -51, 1, 1]
return 1

[20, 10, -80, 10, 10, 15, 35]
return 0

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `findEvenIndex` with parameter `arr`

iterate through every `ind`ex position of `arr`
  split `arr` into `left` and `right` subarrays centered on `ind`
    do not include the value at `ind` for either
  if `left` and `right` sum to the same value
    empty arrays sum to 0
    return `ind`
end iteration

return -1
*/

function findEvenIndex(arr) {
  for (let ind = 0; ind < arr.length; ind += 1) {
    let left = arr.slice(0, ind);
    let right = arr.slice(ind + 1);
    let leftSum = left.reduce((acc, val) => acc + val, 0);
    let rightSum = right.reduce((acc, val) => acc + val, 0);
    if (leftSum === rightSum) return ind;
  }
  return -1;
}