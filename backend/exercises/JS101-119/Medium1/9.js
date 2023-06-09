const ref = {1: 1n, 2: 1n};

function fibonacci(nth) {
  if (ref.hasOwnProperty(nth)) {
    return ref[nth];
  } else {
    let nextFibo = fibonacci(nth - 1) + fibonacci(nth - 2);
    ref[nth] = nextFibo;
    return nextFibo;
  }
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(12));
console.log(fibonacci(20));
console.log(fibonacci(20));
console.log(fibonacci(50));
console.log(fibonacci(75));
console.log(fibonacci(40000));