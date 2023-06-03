/* 18 minutes

PROBLEM
=====
input : number (of digits)
output : number (index)

rules:
function accepts a number which represents the number of digits in a fibonacci number
function returns a number which represents the index of the first fibonacci number with that many digits
first fibonacci number has index of 1

EXAMPLE
=====
fibonacci sequence
1, 1, 2, 3, 5, 8, 13, 21

1 is the first fibonacci number with 1 digit, so an input of 1 would return 1
13 is the first fibonacci number with 2 digits, so an input of 2 would return 7

findFibonacciIndexByLength(2n) === 7n

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `findFibonacciIndexByLength` with one argument `digits`
if `digits` is 1, then return 1n;
declare variable `fibonacciNumbers` and init with [1, 1]
add the last two elements of `fibonacciNumbers` and add to the end of `fibonacciNumbers` as an element
if the added element has `digits` many digits, then return the length of the `fibonacciNumbers` array
if the number of digits of the added element is greater than `digits`, then return null
  to check the number of digits of an element, check the length of the string version of it

*/

function findFibonacciIndexByLength(digits) {
  if (digits === 1n) return 1n;
  let fibonacciNumbers = [1n, 1n];
  while (true) {
    let newNumber = fibonacciNumbers.slice(fibonacciNumbers.length - 2).reduce((acc, val) => acc + val, 0n);
    fibonacciNumbers.push(newNumber);
    if (BigInt(String(newNumber).length) === digits)
    break;
  }
  return BigInt(fibonacciNumbers.length);
}

console.log('rerun');
// console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
// console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
// console.log(findFibonacciIndexByLength(10n) === 45n);
// console.log(findFibonacciIndexByLength(16n) === 74n);
// console.log(findFibonacciIndexByLength(100n) === 476n);
// console.log(findFibonacciIndexByLength(1000n) === 4782n);
// console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.