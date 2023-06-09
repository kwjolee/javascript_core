/*
// 2
// Given a list of integers and a single sum value, return the first two values
// in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.


//Example:

console.log(sumPairs([4, 3, 2, 3, 4],         6));
//                    ^-----^         4 + 2 = 6, indices: 0, 2
//                       ^-----^      3 + 3 = 6, indices: 1, 3
//                          ^-----^   2 + 4 = 6, indices: 2, 4
// == [4, 2]

// Negative numbers and duplicate numbers can and will appear.
*/

/*

PROBLEM
=====
input : array, number
output : array

rules:
output array is a two element array that contains
  the two elements of the input array that
    sum to the input number

if more than one pair can sum to the input number
  return the pair whose second element has the smallest index number

?? :: what if no pair can sum to the number :: return undefined


EXAMPLE
=====
[0, 0, -2, 3], 2 => undefined
[11, 3, 7, 5], 10 => [3, 7]

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `sumPairs` with parameters `inputArr`, `inputNum`

declare variable `candidate` and init with undefined
declare variable `secondInd` and init with Infinity

iterate through every possible pair of elements of `inputArr` :: helper?
* must keep track of index position of second element
  if the two values of the pair sum to `inputNum`
    and the index position of the second element is less than `secondInd`
      create an array with these two values
        reassign `candidate` with this array
        reassign `secondInd` with the current index position of the second element
end iteration

return `candidate`

*/

function sumPairs(inputArr, inputNum) {
  let candidate = undefined;
  let secondInd = Infinity;

  for (let startInd = 0; startInd < inputArr.length - 1; startInd += 1) {
    for (let endInd = startInd + 1; endInd < inputArr.length; endInd += 1) {
      let pair = [inputArr[startInd], inputArr[endInd]];
      let sum = inputArr[startInd] + inputArr[endInd];
      if (sum === inputNum && endInd < secondInd) {
        candidate = pair;
        secondInd = endInd;
      }
    }
  }

  return candidate;
}

//Test cases
console.log(sumPairs([11, 3, 7, 5], 10)); // [3, 7]
console.log(sumPairs([0, 0, -2, 3], 2)); // undefined
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2)); // [1, 1]
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); // [3, 7]
console.log(sumPairs([0, 2, 0], 0)); // [0, 0]
console.log(sumPairs([5, 9, 13, -3], 10)); // [13, -3]
console.log(sumPairs([4, 3, 2, 3, 4], 6)); // [4, 2]