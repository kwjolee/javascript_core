/* 12 minutes

PROBLEM
=====
input : string
output : string with "number words" replaced with digits

rules :
  one => 1
  two => 2
  etc

EXAMPLE
=====
one => 1
two => 2

DATA STRUCTURE
arrays

ALGORITHM
declare function `wordToDigit` with parameter `string`
declare variable `words` and init with : split `string` into array of words separated by space
iterate through `words`
  if word is a "number word", replace word with digit
  if not, keep word
convert `words` to strings separated by space and return
*/

// eslint-disable-next-line max-lines-per-function
function wordToDigit(string) {
  let words = string.split(" ");
  const template = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
    zero: '0'
  };
  const numberWords = Object.keys(template);

  return words.map(word => {
    let numberWordIncluded;
    let includedNumberWord;
    for (let numberWord of numberWords) {
      if (word.includes(numberWord)) {
        numberWordIncluded = true;
        includedNumberWord = numberWord;
        break;
      }
    }

    if (numberWordIncluded) {
      return word.replace(includedNumberWord, template[includedNumberWord]);
    } else {
      return word;
    }
  }).join(" ");
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."