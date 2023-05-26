/*
input : string
output : new string with each input string char duplicated
*/

function repeater(string) {
  let outStr = "";
  for (let char of string) {
    outStr += char;
    outStr += char;
  }
  return outStr;
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""