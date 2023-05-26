/*
input : string of numeric characters
output : that string converted to a number
  however, do not use things like String() or Number()

*/

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

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true