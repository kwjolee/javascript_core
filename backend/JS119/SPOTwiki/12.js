/* 4 minutes no PEDAC


*/

function isPangram(string) {
  const ALPHABETS = "abcdefghijklmnopqrstuvwxyz";
  const TARGET_LENGTH = ALPHABETS.length;
  let letterCount = {};

  for (let char of string) {
    char = char.toLowerCase();
    if (ALPHABETS.includes(char)) {
      letterCount[char] = true;
    }
  }

  let allLetters = Object.keys(letterCount);

  return (allLetters.length === TARGET_LENGTH);
}

let str = "The quick brown fox jumps over the lazy dog.";

console.log(isPangram(str));