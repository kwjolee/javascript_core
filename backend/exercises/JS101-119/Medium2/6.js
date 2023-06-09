/*

PROBLEM
=====
input : number
output : number

rules:
input number is the `count`
A: square of the sum of the first `count` positive integers
B: sum of the squares of the first `count` positive integers
output number is A - B

EXAMPLE
=====
3 : first 3 pos integers are 1, 2, 3
sum of the first 3 integers : 1 + 2 + 3 = 6, square is 36
square of the first 3 integers : 1, 4, 9, sum is 14
36 - 14 = 22

DATA STRUCTURE
=====
arrays : first `count` positive integers

ALGORITHM
=====
declare function `sumSquareDifference` with parameter `count`

declare variable `posIntegers` and init with array of the first `count` pos integers :: helper

declare variable `squareOfSum` and init with the square of the sum of numbers in `posIntegers`

declare varaible `sumOfSquares` and init with the sum of the squares of the numbers in `posIntegers`

return `squareOfSum` - `sumOfSquare`
*/

function sumSquareDifference(count) {
  let posIntegers = [];
  for (let num = 1; num <= count; num += 1) {
    posIntegers.push(num);
  }
  
  let squareOfSum = posIntegers.reduce((acc, val) => acc + val, 0) ** 2;
  let sumOfSquare = posIntegers.map(val => val ** 2).reduce((acc, val) => acc + val, 0);

  return squareOfSum - sumOfSquare;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150