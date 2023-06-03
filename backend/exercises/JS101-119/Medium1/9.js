const table = {1: 1, 2: 1};

function fibonacci(nth) {

  if (table[nth]) return table[nth];

  return table[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);

}

console.log(fibonacci(50));