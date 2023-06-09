/* 9 minutes

PROBLEM
=====
input : array
output : number

rules:
input array is all but one odd or even integers
  there is only one odd or even integer
output number is this one integer that is not like the other numbers

EXAMPLE
=====
2, 4, 6, 8, 11 // 11
1, 3, 5, 7, 10 // 10

DATA STRUCTURE
=====

ALGORITHM
=====
declare function `findOutlier` with parameter `integers`

declare variable `even` and `odd` and init both with 0

iterate through the first three values of `integers`
  evaluate whether value is odd or even
    if odd, increment `odd` by 1
    if even, increment `even` by 1
end iteration

if `odd` is greater than `even`
  we are looking for the one even number
if `even` is greater than `odd`
  we are looking for the one odd number

iterate through every number of `integers`
  if number is of the type we are looking for
    return number
end iteration

*/

function findOutlier(integers) {
  let even = 0;
  let odd = 0;
  for (let ind = 0; ind < 3; ind += 1) {
    let number = integers[ind];
    if (Math.abs(number % 2) === 0) even += 1;
    else odd += 1;
  }
  let remainder = odd > even ? 0 : 1;

  for (let number of integers) {
    if (Math.abs(number % 2) === remainder) return number;
  }
}

console.log(findOutlier([2, -6, 8, -10, -3]))