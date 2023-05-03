function sum(number) {
  return number
    .toString()
    .split("")
    .reduce((acc, num) => acc + +num,0);
}

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));
