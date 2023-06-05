/* 12 minutes

PROBLEM
=====
input : string
output : string

rules:
output string is constructed by
  take the input string
    every 2nd word
      every 4th character
        is uppercased
  all other characters remain the same

words are separated by space

EXAMPLE
=====
'aaA bB c' => 'aaA bB c' // second word is 'bB' but there is no 4th char
'Lorem Ipsum' => 'Lorem IpsUm' // second word is 'Ipsum' and 4th char is 'u' -> 'U'

?? input string is empty => ''
?? if there are multiple spaces between words => does not occur in examples

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `toWeirdCase` with parameter `inputStr`

declare variable `inputStrArr` and init with
  separate `inputStr` into words by splitting using single space

declare variable `outputStrArr` and init with empty array

iterate through every `word` of `inputStrArr`
  iterate through every `character` of `word`
    if `word` is one of every other word
      if `character` is one of every 4th character
        make `character` uppercase
  end iteration
  construct `newWord` with the above criteria
  add `newWord` to end of `outputStrArr`
end iteration

convert `outputStrArr` into single string by using single space as delimiter

return the converted string
*/

function toWeirdCase(inputStr) {
  let inputStrArr = inputStr.split(" ");
  
  let outputStrArr = [];

  inputStrArr.forEach((word, wordInd) => {
    let newWord = "";
    for (let charInd = 0; charInd < word.length; charInd += 1) {
      let char = word[charInd];
      if ((charInd + 1) % 4 === 0 && (wordInd + 1) % 2 === 0) {
        newWord += char.toUpperCase();
      } else {
        newWord += char;
      }
    }
    outputStrArr.push(newWord);
  });

  return outputStrArr.join(" ");
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