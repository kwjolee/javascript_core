function integerToString(number) {
  const mapNum = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9};
  let pow = 0;
  while (number !== (number % Math.pow(10, pow))) {
    pow += 1;
  }
  pow = Math.max(0, pow - 1);
  let outStr = "";
  let keys = Object.keys(mapNum);
  let baseNum = number;
  while (pow >= 0) {
    let digit = parseInt(baseNum / Math.pow(10, pow), 10);
    let char = keys[digit];
    outStr += char;
    baseNum -= digit * Math.pow(10, pow);
    pow -= 1;
  }
  return outStr;
}

function signedIntegerToString(number) {
  if (number < 0) {
    return "-" + integerToString(Math.abs(number));
  } else if (number > 0) {
    return "+" + integerToString(number);
  } else {
    return integerToString(number);
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");