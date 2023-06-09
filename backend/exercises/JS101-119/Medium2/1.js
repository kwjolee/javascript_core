/*

PROBLEM
=====
input : string
output : object

the output object has three properties
  1. % of chars that are lowercase
  2. % of chars that are uppercase
  3. % of chars that are neither :: numbers, punctuations, special chars, etc
the percentages are strings
the percentages are rounded to 2 decimal places

?? what about spaces :: spaces count as "neither" character

EXAMPLE
=====
"abCdef 123" => lowercase 50.00, uppercase 10.00, neither 40.00

DATA STRUCTURE
=====
object : the output object
object : tracks number of char type occurrences (abs val)

ALGORITHM
=====
declare function `letterPercentages` with parameter `inputStr`

declare variable `outputObj` and init with object with three properties
  "lowercase", "uppercase", "neither"
    whose values are null

delcare variable `charCounts` and init with object with three properties
  "lowercase", "uppercase", "neither"
    whose values are 0s

iterate through every character of `inputStr`
  if character is lowercase
    increment value of "lowercase" property of `charCounts` by 1
  if character is uppercase
    increment value of "uppercase" property of `charCounts` by 1
  if neither
    increment value of "neither" property of `charCounts` by 1
end iteration

for each of the three properties of `charCounts`
  calculate the percentage of character type counts
    by dividing the property value by the length of `inputStr`
      then multiplying 100
        then rounding to 2 decimal places
          make this a string
            place this string as the value for `outputObj` properties
end

return `outputObj`
*/

function letterPercentages(inputStr) {
  let outputObj = {lowercase: null, uppercase: null, neither: null};
  let charCounts = {lowercase: 0, uppercase: 0, neither: 0};

  // can refactor by writing subfunction to check cases
  for (let char of inputStr) {
    if (char.toLowerCase() === char.toUpperCase()) charCounts.neither += 1;
    else if (char === char.toLowerCase()) charCounts.lowercase += 1;
    else if (char === char.toUpperCase()) charCounts.uppercase += 1;
  }

  // can refactor by writing subfunction to convert to %
  outputObj.lowercase = ((charCounts.lowercase * 100) / inputStr.length).toFixed(2);
  outputObj.uppercase = ((charCounts.uppercase * 100) / inputStr.length).toFixed(2);
  outputObj.neither = ((charCounts.neither * 100) / inputStr.length).toFixed(2);
  //

  return outputObj;
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }