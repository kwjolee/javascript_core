/* 9 minutes

PROBLEM
=====
input : two arrays
output : number

rules:
input arrays are arrays of integers
input arrays have equal length
compare the nth element of first array with nth element of second array
  find the difference
    square the difference**
output the average of these squared differences**

EXAMPLE
=====
[1, 2, 3]
[4, 5, 6] => differences are [-3, -3, -3] => squares are [9, 9, 9] => average is 9
---
[10, 20, 10, 2]
[10, 25, 5, -2] => diff are [0, 5, 5, 4] => squares are [0, 25, 25, 16] => average is 16.5

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `solution` with parameters `firstArray`, `secondArray`

declare `diffArray` and init with empty array

iterate through every index position of `firstArray`
  find the difference between the values of `firstArray` and `secondArray` at index position
    add this difference to `diffArray`
end iteration

declare `squareArray` and init with empty array

iterate through every element of `diffArray`
  square the element value
    add to `squareArray`
end iteration

return the average value of all elements in `squareArray`
*/

var solution = function(firstArray, secondArray) {
  let diffArray = firstArray.map((_, ind) => firstArray[ind] - secondArray[ind]);
  let squareArray = diffArray.map(val => val ** 2);
  let squareSum = squareArray.reduce((acc, val) => acc + val, 0);
  let squareLen = squareArray.length;
  let squareAvg = squareSum / squareLen;
  return squareAvg;
};

console.log(solution([1, 2, 3], [4, 5, 6]));