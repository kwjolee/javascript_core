/* 10 minutes

PROBLEM
=====
input : number
output : string

rules:
input number is a whole number greater than 0
output string represents the input number in expanded form
expanded form is:
  every digit multiplied by its place, then those digits being added together

EXAMPLE
=====
1 => 1
10 => 10
12 => '10 + 2'
42 => '40 + 2'
70304 => '70000 + 300 + 4'

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `expandedForm` with parameter `inputNum`

declare variable `numString` and init with `inputNum` converted to string

declare variable `numArr` and init with empty array

iterate through every character of `numString`
  if char is 0
    skip to next char
  identify its place (tens, hundreds, etc) :: helper
    multiply char (in number) by place
      add to `numArr`
end iteration

convert `numArr` to string by joining elements using `' + '` as delimiter

return converted string
*/

function expandedForm(inputNum) {
  let numString = String(inputNum);

  let numArr = [];

  for (let ind = 0; ind < numString.length; ind += 1)  {
    let digit = numString[ind];
    if (digit !== "0") {
      let place = getPlace(ind, numString);
      let digitExpanded = digit * place;
      numArr.push(digitExpanded);
    }
  }

  let inputNumExpand = numArr.join(" + ");

  return inputNumExpand;
}

function getPlace(ind, numString) {
  let totalDigits = numString.length;
  let exp = totalDigits - ind - 1;
  return Math.pow(10, exp);
}
