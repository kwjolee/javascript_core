function multiply(num1, num2) {
  return num1 * num2;
}

function square(num) {
  return multiply(num, num);
}

function power(num, pow) {
  if (pow === 0) return 1;
  if (pow < 0) return 1 / (num * power(num, Math.abs(pow) - 1));
  return num * power(num, pow - 1);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

console.log(power(5, 2) === 25); // logs true
console.log(power(-8, 2) === 64); // logs true