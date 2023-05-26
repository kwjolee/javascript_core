/*
intput : string
output : new string, every non-vowel char doubled
*/

function doubleConsonants(string) {
  let outStr = "";
  const CONS = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
  for (let char of string) {
    if (CONS.includes(char)) {
      outStr += char.repeat(2);
    } else {
      outStr += char;
    }
  }
  console.log(outStr);
  return outStr;
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""