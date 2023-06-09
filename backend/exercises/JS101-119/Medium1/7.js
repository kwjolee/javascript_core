function fibonacci(nth) {
  if (nth === 1 || nth === 2) return 1n;
  return fibonacci(nth - 1) + fibonacci(nth - 2);
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(12));
console.log(fibonacci(20));
console.log(fibonacci(4000));