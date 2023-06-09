/* 7 minutes

PROBLEM
=====
input : number
output : number

rules:
sum the digits of input number
if result number is more than one digits
sum those digits again
continue until result number is a single digit

output number is the final result number

input number is non negative integer

EXAMPLE
=====
16 :: 1 + 6 = 7 :: return 7
942 :: 9 + 4 + 2 = 15 :: 1 + 5 = 6 :: return 6

DATA STRUCTURE
=====
arrays, strings

ALGORITHM
=====
declare function `digitalRoot` with parameter `n`

declare variable `nString` and init with `n` converted to string

repeat as long as :: `nString` has length greater than 1
  declare variable `digits` and init with array of characters of `nString` (digits)
  sum all values (converted to number) of `digits`
  reassign `nString` with the sum above converted to string
end

return `nString` converted to number
*/

function digitalRoot(n) {
  let nString = String(n);

  while (nString.length > 1) {
    let digits = [...nString];
    let sum = digits.reduce((acc, val) => acc + Number(val), 0);
    nString = String(sum);
  }
  return Number(nString);
}

console.log(digitalRoot(942));