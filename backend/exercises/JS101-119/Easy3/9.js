/*
input : string of words and non-alpha characters
output : all non-alpha char are replaced by spaces
rule : if multiple non-alpha char occur consecutively, only replace with 1 spce

algo:
set empty string
set list of accepted char (a-zA-Z)
iterate through given string
if current char is accepted
  if prev char was not accepted, add space
  add char
if not
  set prevCharAccpt to `false`
*/

function cleanUp(string) {
  let outString = "";
  let acceptedChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let prevCharAccpt = true;

  for (let char of string) {
    if (acceptedChar.includes(char)) {
      if (!prevCharAccpt) outString += " ";
      outString += char;
      prevCharAccpt = true;
    } else {
      prevCharAccpt = false;
    }
  }
  console.log(outString);
  return outString;
}

cleanUp("---what's my +*& line?");    // " what s my line "