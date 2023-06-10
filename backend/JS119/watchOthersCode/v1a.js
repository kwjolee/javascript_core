/*

PROBLEM
=====
input : number
output : number

rules:
rearrange the digits of the input number such that
  the next larger number is created
    return this number
if input number is already the maximum value possible
  return -1

EXAMPLE
=====
12 -> 21
513 -> 531
2017 -> 2071
123456789 -> 123456798
111 -> -1
531 -> -1
123456798 -> 123456879

1432 -> 1423
        1243
        2143 : 


DATA STRUCTURE
=====
array : hold the digits of the number

ALGORITHM
=====
declare function `nextBiggerNum` with parameter `inputNum`

if `inputNum` < 10, return -1

declare varaible `inputNumArr` and init with array of digits of `inputNum`

iterate starting from the last two digits of `inputNum`
  keep all prefix digits and rotate the last two digits
    if this number is greater than `inputNum`
      return this number
    if not
      back up the index such that one more digit is included in the rotation
        repeat above
end iteration

return -1

*/
function nextBiggerNum(inputNum) {
  let maxNum = Number(String(inputNum).split("").sort((a, b) => b - a).join(""));
  let outputNum = inputNum;

  while (outputNum < maxNum) {
    outputNum += 1;
    if (haveCommonDigits(outputNum, inputNum)) return outputNum;
  }
  return -1;
}

console.log(nextBiggerNum(786));

function haveCommonDigits(num1, num2) {
  let arr1 = String(num1).split("");
  let arr2 = String(num2).split("");
  if (arr1.length !== arr2.length) return false;
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  for (let ind = 0; ind < arr1.length; ind += 1) {
    if (arr1[ind] !== arr2[ind]) return false;
  }
  return true;
}