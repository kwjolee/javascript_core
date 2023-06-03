/* 13 minutes

PROBLEM
=====
input : string
output : string

rules: 
output string converts the input string
  every second word
    every 4th character
      is uppercased
all other characters remain

?? how are words separated in sentence string :: spaces
?? what if input string is empty :: return empty string
?? if word is less than 4 chars :: keep word as is
?? if target char is already uppercase :: keep uppercase

EXAMPLE
=====
'It is a long' => 'It is a lonG' :: g -> G
'aaA bB c' => 'aaA bB c' :: all words < 4 char
'Miss Mary Poppins word' => 'Miss MarY Poppins worD' :: y -> Y, d -> D

DATA STRUCTURES
=====
strings, arrays

ALGORITHM
=====
declare function `toWeirdCase` with parameter `inputString`

declare variable `outputArr` and init with empty array

split `inputString` into words

iterate through every word of `inputString`
  if word is one of every other word
    iterate through every character of word
      if character is one of every 4th char
        capitalize character
        add changed word to `outputArr`
      if not then move to next word
        add unchanged word to `outputArr`
  if not then move to next word
    add unchanged word to `outputArr`
end iteration

join `outputArr` into single string separated by space

return `outputArr`
*/

function toWeirdCase(inputString) {
  let outputArr = [];

  let stringArr = inputString.split(" ");

  stringArr.forEach((word, indOuter) => {
    if (indOuter % 2 !== 0) {
      let lettersArr = word.split("");
      lettersArr.forEach((char, indInner) => {
        if ((indInner + 1) % 4 === 0) {
          lettersArr[indInner] = char.toUpperCase();
        }
      });
      let newWord = lettersArr.join("");
      outputArr.push(newWord);
    } else {
      outputArr.push(word);
    }
  });

  return outputArr.join(" ");
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