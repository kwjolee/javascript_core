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

console.log(integerToString(0));
