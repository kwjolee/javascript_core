function factors(number) {
  if (number === 0) return 0;
  let factors = [];
  for (let divisor = 1; divisor <= Math.abs(number); divisor += 1) {
    if (number % divisor === 0) {
      factors.push(divisor);
    }
  }

  return factors;
}

console.log(factors(-12));

// number % divisor === 0 checks to see that the return value of number / divisor is a factor of the number