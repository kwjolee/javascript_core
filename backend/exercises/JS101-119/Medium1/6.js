/*

PROBLEM
=====
input : number
output : number

rules:
output number is the nth fibonacci number
  that has the number of digits that match the input number

EXAMPLE
=====
2 => 7
2 means look for the first fibonacci number that has 2 digits
this is 13 which is the 7th fibonacci number
return 7

3 => 12
first 3 digit fibo number is 144
144 is the 12th fibo number
return 12

* use BigInt

DATA STRUCTURE
=====
array : list of fibonacci number

ALGORITHM
=====
declare function `findFibonacciIndexByLength` with parameter `digits`

if `digits` is 1, return 1 ** first 2 fibo numbers are 1 by default
  3rd fibo number would be in index position 2 of fibo number list

declare variable `fibo` and init with two element array whose values are both 1

declare variable `nth` and init with 3

repeat
  declare variable `nextFibo` and init with the sum of the last two elements of `fibo`
  if `nextFibo` has number of digits that match `digits`
    return `nth`
  if not
    add `nextFibo` to end of `fibo`
    increment `nth` by 1
repeat

*/

function findFibonacciIndexByLength(digits) {
  if (digits === 1) return 1;

  let fibo = [1n, 1n];

  for (let nth = 3; true; nth += 1) {
    let nextFibo = fibo[nth - 3] + fibo[nth - 2];
    if (String(nextFibo).length === digits) return nth;
    fibo.push(nextFibo);
  }
}

console.log(findFibonacciIndexByLength(10000))