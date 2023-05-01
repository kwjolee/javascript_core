function integerToString(integer) {
  let out = '';
  let pow = Math.max(Math.floor(Math.log(integer) / Math.log(10)), 0);
  let target = integer;

  for (; pow >= 0; pow -= 1) {
    let digit = Math.floor(target / Math.pow(10,pow));
    if (digit === -Infinity) {
      out += String.fromCharCode(48);
    } else {
      out += String.fromCharCode(digit + 48);
    }
    target -= digit * Math.pow(10,pow);
  }

  return out;
}

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"