/* 8 minutes

PROBLEM
=====
input : string
output : object
  three properties
    lowercase: % of lowercase characters
    uppercase: % of uppercase characters
    neither: % of characters that are neighter

rules :
percentage is a numerical string rounded to 2 decimal places
if no character meets the criteria, "0.00"
string has at least one character

EXAMPLE
=====
'abCdef 123' // has 10 characters, 5 lower case, 1 cupper case, 4 neither
'123' // has 3 characters, 3 neither

DATA STRUCTURE
=====
object

ALGORITHM
=====
declare function `letterPercentages` with one parameter `str`
declare variable `obj` and init with obj with properties `lowercase`, `uppercase`, and `neither` whose values are all 0
iterate through characters of `str`
  if character is a lower chase alphabet, then increment lowercase value of `obj` by 1
  if character is an upper case alphabet, then increment uppercase value of `obj` by 1
  if character is neither, then increment neither value of `obj` by 1
convert all values of `obj` to proper percentage form in string type
return obj

*/

function letterPercentages(str) {
  let obj = {lowercase: 0, uppercase: 0, neither: 0};
  for (let char of str.split("")) {
    if (char.toLowerCase() === char.toUpperCase()) obj.neither += 1;
    else if (char === char.toLowerCase()) obj.lowercase += 1;
    else if (char === char.toUpperCase()) obj.uppercase += 1;
  }
  obj.neither = ((obj.neither / str.length) * 100).toFixed(2);
  obj.lowercase = ((obj.lowercase / str.length) * 100).toFixed(2);
  obj.uppercase = ((obj.uppercase / str.length) * 100).toFixed(2);
  return obj;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }