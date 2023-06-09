/* 13 minutes

PROBLEM
=====
input : array
output : number

rules:
input array size is at least 2
input array values will only be positive integers
values in list can repeat

output number + sum of input array numbers === closest prime number
closest prime number means closest prime > sum

EXAMPLE
=====
[3, 1, 2] => sum 6
closest prime is 5 or 7
insert 1 to get 7
return 1

[5, 2] => sum 7
already prime
insert 0
return 0

DATA STRUCTURE
=====

ALGORITHM
=====
declare function `minimumNumber` with parameter `numbers`

declare variable `number` and init with 0

declare variable `inputSum` and init with sum of input array values

check if `inputSum` + `number` is a prime :: helper
  if yes, return `number`
  if no, increment `number` by 1
  repeat until prime is found
end checking

*/

function minimumNumber(numbers) {
  let number = 0;
  let inputSum = numbers.reduce((acc, val) => acc + val, 0);

  while (!isPrime(number + inputSum)) {
    number += 1;
  }

  return number;
}

function isPrime(value) {
  if (value === 1) return false;
  if (value === 2) return true;
  if (value % 2 === 0) return false;
  let div = 3;
  while (div < value) {
    if (value % div === 0) return false;
    div += 1;
  }
  return true;
}

console.log(isPrime(7));

/*
input : number
output : boolean
if input value is a prime number, then return `true`, otherwise `false`

algo
====
if 2, then return true
if even number, then return false
declare variable `div` and init with 3

if remainder of dividing value by div is 0
  return false
if not
  increment div by 1
    repeat above process
if div === value
  return true

*/