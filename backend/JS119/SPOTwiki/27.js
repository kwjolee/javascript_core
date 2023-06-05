// 4 minutes no PEDAC

function power(base, exponent) {
  if (exponent === 0) return 1;
  if (exponent < 0) return null;
  let num = base;
  for (let pow = 1; pow < exponent; pow += 1) {
    num *= base;
  }
  return num;
}

console.log(power(10, 0)); // 1
console.log(power(2, 3)); // 8
console.log(power(3, 2)); // 9
console.log(power(-5, 3)); // -125
console.log(power(-4, 2)); // 16
console.log(power(8, -2)); // null