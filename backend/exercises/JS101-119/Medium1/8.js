function fibonacci(nth) {
  let fibo = [1n, 1n];

  while (fibo.length < nth) {
    let nextFibo = fibo[fibo.length - 1] + fibo[fibo.length - 2];
    fibo.push(nextFibo);
  }

  return fibo[fibo.length - 1];
}

console.log(fibonacci(20));
console.log(fibonacci(50));
console.log(fibonacci(75));
console.log(fibonacci(40000));