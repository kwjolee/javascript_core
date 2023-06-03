/* 24 minutes for slow solution

PROBLEM
=====
input : array, number
output : array

rules:
input array has a numbers (can be negative, can be duplicate)
input number is the sum of two input array elements

output array is the two elements of the input array that sum to input number
  if more than one pair can accomplish this
    return pair whose second element has the smallest index position
order of the output array values matters

if no pair can be found, then return `undefined`

EXAMPLES
=====
[11, 3, 7, 5]   vs 10 => [3, 7]
[4, 3, 2, 3, 4] vs 6 => [4, 2]
[0, 0, -2, 3]   vs 2 => undefined

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `sumPairs` with parameters `inputArray` and `targetSum`

declare variable `candidates` and init with empty array // nested array

iterate through every pair of elements of `inputArray` :: helper
  if pair sums to `targetSum`
    make array [pair, index of second element] and add to `candidates`
  if not, move to next pair
end iteration

find the pair in `candidates` that has the lowest `second element index value` :: helper

return that pair

helper :: get all pairs of elements in array
input : array
output : array of arrays

get first element of input array
  get first element of remaining array
    add to output array as [el1, el2]
  repeat through remaining array
repeat through array

return output array
*/

function sumPairs(inputArray, targetSum) {
  let candidates = [];

  let allPairs = getAllPairs(inputArray);

  let minInd = Infinity;

  for (let subArr of allPairs) {
    let pair = subArr[0];
    let ind2 = subArr[1];
    if (pair.reduce((acc, val) => acc + val, 0) === targetSum) {
      candidates.push([pair, ind2]);
      minInd = Math.min(minInd, ind2);
    }
  }

  for (let candidate of candidates) {
    if (candidate[1] === minInd) return candidate[0];
  }
}

function getAllPairs(array) {
  let outArr = [];
  let ind1 = 0;
  let ind2;

  while (ind1 < array.length - 1) {
    ind2 = ind1 + 1;
    while (ind2 < array.length) {
      outArr.push([[array[ind1], array[ind2]], ind2]);
      ind2 += 1;
    }
    ind1 += 1;
  }

  return outArr;
}


console.log(sumPairs([1, 2, 3, 4, 5], 5));