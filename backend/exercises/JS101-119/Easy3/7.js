/*
input : number
output : if number repeats digits on left and right half, return same number
otherwise, return number * 2

algo:
how to determine if number repeats digits left and right halves
convert number to string
slice string to left and right halves based on string length
compare
*/

function twice(number) {
  let numberStr = String(number);
  if (numberStr.length % 2 !== 0) return number * 2;
  let leftStr = numberStr.slice(0, (numberStr.length / 2));
  let rightStr = numberStr.slice((numberStr.length / 2));
  if (leftStr === rightStr) return number;
  return number * 2;
}

console.log(twice(37));
console.log(twice(44));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(107));
console.log(twice(103103));
console.log(twice(3333));
console.log(twice(7676));