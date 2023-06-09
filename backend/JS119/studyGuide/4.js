/* 12

PROBLEM
=====
input : array
output : array

rules:
output array is constructed by:
  the two elements in the input array that are
    closest together in value (abs diff)

?? tiebreaker/ :: first occurring pair

EXAMPLE
=====
[12, 7, 17] :: |12 - 7| = 5, |12 - 17| = 5
                  ***
                  occurs first

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `closestNumbers` with parameter `inputArr`

declare variable `allPairs` and init with
  * get every pair of elements in `inputArr` :: array :: helper

declare variable `minDiff` and init with Infinity
declare variable `candidate` and init with nothing

iterate through every pair of elements in `allPairs`
  calculate the absolute difference between the pair elements
  if this difference is less than `minDiff`
    reassign `minDiff` with this difference
    reassign `candidate` with this pair
end iteration

return `candidate`
*/

function closestNumbers(inputArr) {
  let allPairs = getAllPairs(inputArr);

  let minDiff = Infinity;
  let candidate;

  for (let pair of allPairs) {
    let diff = Math.abs(pair[0] - pair[1]);
    if (diff < minDiff) {
      minDiff = diff;
      candidate = pair;
    }
  }

  return candidate;
}

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]

function getAllPairs(inputArr) {
  let outArr = [];
  for (let ind1 = 0; ind1 < inputArr.length - 1; ind1 += 1) {
    for (let ind2 = ind1 + 1; ind2 < inputArr.length; ind2 += 1) {
      outArr.push([inputArr[ind1], inputArr[ind2]]);
    }
  }
  return outArr;
}


/*
input : array
output : array of arrays
output array consists of all possible pairs of input array
create a holder array
iterate through every index of input array
  iterate through every index of rest of the array
    create an array with values at the two indices in order
    add this array to the end of the holder array
  end iteration
end iteration
return holder array
*/

