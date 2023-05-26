/*
input : string
output : new string
rule : all consecutive duplicate char of input string reduced to 1 occurrence

algo:
iterate through every char of input string
if previous char and current char are same, move on to next char
if previous char and current char are different, add previous char to new string
*/

function crunch(inputString) {
  let outputString = "";
  for (let ind = 0; ind < inputString.length; ind += 1) {
    let prevChar = inputString[ind];
    let currChar = inputString[ind + 1];
    if (prevChar !== currChar) outputString += prevChar;
  }
  console.log(outputString);
  return outputString;
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""