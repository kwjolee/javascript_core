/* 11 minutes

PROBLEM
=====
input : string
output : string

rules:
output string is constructed by
  for every unique alphabetical character in the input string
    the capitalized version comes first
      all lowercased versions comes after
  sort all occurring alphabetical characters in alpha order

"mothers" (capitalized characters) are unique

EXAMPLE
=====
"aAbaBb" => "AaaBbb"
A comes first, then two a
B comes first, then two b
As comes before Bs

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `findChildren` with parameter `dancingBrigade`

declare variable `united` and init with empty string

declare varaible `alphabet` and init with a string that has all lowercase alpha characters

iterate through every `char`acter of `alphabet`
  if `char` exists in `dancingBridage`
    add uppercase of `char` to `united`
    filter `dancingBrigade` by removing all `char` (case SENSITIVE)
    find `diff` in length between `dancingBrigade` and the filtered string
    repeat `char` as many times as `diff` then add to `united`
end iteration

return `united`

*/

function findChildren(dancingBrigade) {
  let united = "";
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  for (let char of alphabet) {
    if (dancingBrigade.includes(char)) {
      united += char.toUpperCase();
      let regexp = new RegExp(char, "g");
      let filtDB = dancingBrigade.replace(regexp, "");
      let diff = dancingBrigade.length - filtDB.length;
      united += char.repeat(diff);
    }
  }
  return united;
}

console.log(findChildren("aAbaBb"));