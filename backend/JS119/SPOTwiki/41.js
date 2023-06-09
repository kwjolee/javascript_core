/* 8 minutes

PROBLEM
=====
input : string
output : string

rules:
"#" in a string acts as a backspace
output string processes these "#"s in the input string
  and returns the resulting processed string

EXAMPLE
=====
"a#bc#d" => "bd" :: a is removed, then c is removed
""  => ""
"####" => ""
"abc#d##c" => "ac"

DATA STRUCTURE
=====
arrays?

ALGORITHM
=====
declare function `cleanString` with parameter `s`

declare variable `keptChars` and init with empty array

iterate through every `char`acter of `s`
  if `char` is "#"
    remove last character from `keptChars`
  if `char is `not "#"
    add `char` to the end of `keptChars`
end iteration

convert `keptChars` to a single string by
  joining all the element characters together

return the converted string

*/

function cleanString(s) {
  let keptChars = [];

  for (let char of s) {
    if (char === "#") {
      keptChars.pop();
    } else {
      keptChars.push(char);
    }
  }

  return keptChars.join("");
}

console.log(cleanString("a#bc#d"));