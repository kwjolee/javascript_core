/*
input : string
output : utf-16 sum of every character in the string

rules:
utf-16 value of a character can be found using charCodeAt() string method
*/

function utf16Value(inputString) {
  let utf16Sum = 0;
  for (let char of inputString) {
    utf16Sum += char.charCodeAt();
  }
  return utf16Sum;
}

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811