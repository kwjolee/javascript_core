/* 6 minutes

PROBLEM
=====
input : number
output : the `number`th fibonacci number

rules : must use recursion

EXAMPLE
=====
fibonacci(1) === 1
fibonacci(2) === 1
fibonacci(5) === 5
fibonacci(12) === 144

DATA STRUCTURE
=====
numbers

ALGORITHM
declare function `fibonacci` with parameter `nth`
establish "guard clauses" where nth===1 or nth===2 returns 1

*/

function fibonacci(nth) {
  if (nth === 1 || nth === 2) return 1;
  return fibonacci(nth - 1) + fibonacci(nth - 2);
}

console.log(fibonacci(50));