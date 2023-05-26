/*
input : integer
output : string of length `integer` patterned 10101010
*/

function stringy(number) {
  let outStr = '';
  let char = 1;
  while (outStr.length !== number) {
    outStr += char;
    char = Math.abs(char - 1);
  }
  console.log(outStr);
  return outStr;
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"