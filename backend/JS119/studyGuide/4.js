/* 12 minutes

PROBLEM
=====
input : array
output : array

rules:
input array has integers
output array has two integers
  the two integers of the input array that are closest together in value

if more than one pair of numbers have the same difference
  return the first occurring pair (searching left to right of array)

?? order of returned numbers relevant?
  [15, 11] treated same as [11, 15]?
    seems like no, numbers must appear in the order they appear in the input arr

?? empty input array

EXAMPLE
=====
[5, 25, 15, 11, 20] => [15, 11] :: min difference of 4, 15 appears before 11
[12, 7, 17] => [12, 7] :: same differences of 5, [12, 7] before [12, 17]

DATA STRUCTURES
=====
arrays

general idea:
get all permutations of 2 element value differences through array :: helper
find the minimum difference
iterate through input array :: helper?
  first el vs. remaining els
    if diff === min diff
      return pair
  second el vs. remaining els
    repeat

ALGORITHM
=====
declare function `closestNumbers` with parameter `inputArr`
declare variable `outputArr` and init with empty array

get all permutations of 2 element value differences through the input array

declare variable `minDiff` and init with minimum difference from above

iterate through input array
  start with first element
    compare to the remaining elements as pairs
      find difference
        if difference === `minDiff`
          return [firstEl, otherEl]
  start with second element
    repeat process

*/

function closestNumbers(inputArr) {
  let outputArr = [];

  let allDiff = permuteDiff(inputArr);
  let minDiff = Math.min(...allDiff);

  for (let startInd = 0; startInd < inputArr.length - 1; startInd += 1) {
    let startVal = inputArr[startInd];
    for (let endInd = startInd + 1; endInd < inputArr.length; endInd += 1) {
      let endVal = inputArr[endInd];
      let currDiff = Math.abs(startVal - endVal);
      if (currDiff === minDiff) {
        return [startVal, endVal];
      }
    }
  }
}

/*
iterate through every element pair
add absolute diff to array
return array
*/

function permuteDiff(arr) {
  let outArr = [];
  for (let startInd = 0; startInd < arr.length - 1; startInd += 1) {
    let startVal = arr[startInd];
    for (let endInd = startInd + 1; endInd < arr.length; endInd += 1) {
      let endVal = arr[endInd];
      let currDiff = Math.abs(startVal - endVal);
      outArr.push(currDiff);
    }
  }
  return outArr;
}

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]