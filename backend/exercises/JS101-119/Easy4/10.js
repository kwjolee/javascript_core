function stringToInteger(string) {
  const mapNum = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9};
  let outNum = 0;
  let exp = string.length - 1;
  for (let digit of string.split("")) {
    outNum += mapNum[digit] * Math.pow(10, exp);
    exp -= 1;
  }
  return outNum;
}

function stringToSignedInteger(string) {
  let sign;
  let baseString = string;
  if (string[0] === "-" || string[0] === "+") {
    sign = string[0];
    baseString = string.slice(1);
  }
  let num = stringToInteger(baseString);
  if (sign === "-") return -num;
  return num;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true