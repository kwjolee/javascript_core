/* 7 minutes

PROBLEM
=====
input : number
output : number

rules:
output number represents
  how many times the input number's digits must be multiplied
    to result in a single digit number

EXAMPLE
=====
39 -> 3*9 = 27 -> 2*7 = 14 -> 1*4 = 4 // 3
4 -> 4 // 0

DATA STRUCTURE
=====
arrays?

ALGORITHM
=====
declare function `persistence` with parameter `num`

declare variable `count` and init with 0

evaluate the digits of `num`
  if the number of digits is 1
    end evaluation
  if not
    multiply all the digits of `num`
    update `num` with the above number
    increment `count` by 1
end evaluation

return `count`
*/

function persistence(num) {
  let count = 0;

  let numString = String(num);

  while (numString.length !== 1) {
    num = numString.split("").reduce((acc, val) => acc * Number(val), 1);
    numString = String(num);
    count += 1;
  }

  return count;
}