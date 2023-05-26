/*
input : two values
output : boolean - true if only one of the two input values evaluate to true.
  false otherwise
*/

function xor(val1, val2) {
  return !!val1 + !!val2 === 1;
}

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true