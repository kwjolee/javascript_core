/* 5 minutes

PROBLEM
=====
input : two numbers
output number

rules:
if a number can be found repeating
  3 times in the first input array
  2 times in the second input array
    then return 1
if not
  return 0

EXAMPLE
======
451999277, 41177722899 // 1
   ***              **

1222345, 12345 // 0
 ***      *

DATA STRUCTURES
=====

ALGORITHM
=====
declare function `tripledouble` with parameters `num1` and `num2`

iterate through every digit of `num1` :: make `num1` into string then iterate through characters
  if digit occurs 3 consecutive times in `num1` :: check for substring
    if digit occurs 2 conseucitve times in `num2` :: check for substring
      return `true`
end iteration

return `false`
*/

function tripledouble(num1, num2) {
  let str1 = String(num1);
  let str2 = String(num2);

  for (let digit of str1) {
    if (str1.includes(digit.repeat(3)) && str2.includes(digit.repeat(2))) {
      return 1;
    }
  }
  return 0;
}