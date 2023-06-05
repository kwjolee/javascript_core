/* 11 minutes

PROBLEM
=====
input : array
output : array

rules:
input array contains integers
output array has two integers
  the values are the two values in the input array that are closest together in value

if more than 2 pairs possible
  return first pair
order is relevant
?? input array empty :: example does not cover :: assume input array is >= 2 length

EXAMPLES
=====
[5, 25, 15, 11, 20] => [15, 11] :: order seems to matter
[19, 25, 32, 4, 27, 16] => [25, 27]
[12, 7, 17] => [12, 7] :: [12, 7] pair occurs before [12, 17] pair

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `closestNumbers` with parameter `inputArr`

find all possible pairs of numbers in `closestNumbers` :: helper

declare variable `minDiff` and init with Infinity
declare variable `keptPair` and init with empty value

iterate through all possible pairs of numbers
  calculate the absolute difference of the pairs
    if abs diff is lesser than `minDiff`
      reassign `mindDiff` with this diff
      reassign `keptPair` with this pair
end iteration

return `keptPair`
*/

/*
helper function to get all possible pairs :: subarrays
input : array
output : array of arrays
grab every adjacent element of input array and add to output array

*/

function closestNumbers(inputArr) {
  let allPairs = getAllPairs(inputArr);

  let minDiff = Infinity;
  let keptPair;

  for (let pair of allPairs) {
    let diff = Math.abs(pair[0] - pair[1]);
    if (diff < minDiff) {
      minDiff = diff;
      keptPair = pair;
    }
  }

  return keptPair;
}

function getAllPairs(arr) {
  let outArr = [];
  for (let ind1 = 0; ind1 < arr.length - 1; ind1 += 1) {
    for (let ind2 = ind1 + 1; ind2 < arr.length; ind2 += 1) {
      let subarr = [arr[ind1], arr[ind2]];
      outArr.push(subarr);
    }
  }
  return outArr;
}

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]