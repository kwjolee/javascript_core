function isOdd(number) {
  return Math.abs(number) % 2 !== 0;
}

// the function isOdd accepts one argument, a number, and assigns it to the parameter `number`
// the absolute value of that number is found by using the Math method abs.
// The remainder after dividing the return value of the abs method by two is compared against the number 0
// if this returns true, it means that `number` is an even number. since the problem statement asks to return `true` if the number is odd, the boolean value is flipped using the ! operator

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true