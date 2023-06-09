/*

PROBLEM
=====
input : string
output : string

rules:
output string is the input string reconstructed as:
  every second word
    every 4th character
      is uppercase
  all other characters remain the same

?? how are words separated :: by space
?? what if input string is empty :: don't worry about it :: ""

EXAMPLE
=====
"Lorem Ipsum" => "Lorem IpsUm"
"It is a long" => "It is a lonG"
"Miss Mary Poppins word" => "Miss MarY Poppins worD"

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `toWeirdCase` with parameter `inputStr`

declare variable `words` and init with:
  array of words in `inputStr`
    words are separated by space

declare variable `newWords` and init with empty array

iterate through every `word` of `words`
  if the `word` is every other word
    iterate through every `char`acter of `word`
      if `char` is every 4th character of `word`
        capitalize `char`
    end iteration
  add this reconstructed word to the end of `newWords`
end iteration

convert `newWords` to a single string using a single space as delimiter
return this converted string
*/

function toWeirdCase(inputStr) {
  let words = inputStr.split(" ");

  let newWords = [];

  words.forEach((word, wordInd) => {
    if ((wordInd + 1) % 2 === 0) {
      let wordArr = word.split("");
      wordArr.forEach((char, charInd) => {
        if ((charInd + 1) % 4 === 0) {
          wordArr[charInd] = char.toUpperCase();
        }
      });
      newWords.push(wordArr.join(""));
    } else {
      newWords.push(word);
    }
  });
  return newWords.join(" ");
}

console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');