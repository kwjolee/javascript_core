/* 4 minutes

PROBLEM
=====

*/

function fibonacci(nth) {
  if (nth === 1 || nth === 2) return 1;
  let fibonacciNumbers = [1, 1];
  while (fibonacciNumbers.length < nth) {
    let newNumber = fibonacciNumbers.slice(fibonacciNumbers.length - 2).reduce((acc, val) => acc + val, 0);
    fibonacciNumbers.push(newNumber);
  }
  return fibonacciNumbers[fibonacciNumbers.length - 1];
}

console.log(fibonacci(75));