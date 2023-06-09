/* 12 minutes

PROBLEM
=====
input : two numbers
output : number

rules:
first input number provides the digits
second input number is the starting exponent

output number is:
  the digits of the first input number
    raised to the power of (its index position + second input number)
      sum of those powers
  is that sum of power equal to the first input number multiplied by k
    k being any positive integer
  if k does not exist, then return -1

EXAMPLE
=====
89, 1 => 1
92, 1 => -1
9 + 2^2 = 9 + 4 = 13 :: 92 cannot be multiplied by an integer to get 13

DATA STRUCTURE
=====
array

ALGORITHM
=====
declare function `digPow` with parameters `n`, `p`

declare variable `digits` and init with array of digits of `n`

raise each value of `digits` by (`p` + index position)
  sum these values
    declare variable `powSum` and init to this

declare variable `k` and init with `powSum` divided by `n`

if `k` is not integer, return -1
return `k`

*/

function digPow(n, p) {
  let digits = [...String(n)];
  let powSum = digits.reduce((acc, val, ind) => acc + (val ** (ind + p)), 0);
  let k = powSum / n;

  if (k === parseInt(k, 10)) return k;
  return -1;
}

console.log(digPow(46288, 3));