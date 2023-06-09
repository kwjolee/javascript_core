/* 14 minutes

PROBLEM
=====
input : two numbers
output : number

rules:
first input number is the base number
second input number indicates the number of digits (last digits)

output number is
  first input number
    has the last x-digits (x being second input number)
      rotated
        rotated meaning first digit moved to the end

EXAMPLES
=====

DATA STRUCTURE
=====
arrays
  digits to not be rotated
  digits to be rotated

ALGORITHM
=====
declare function `rotateRightmostDigits` with parameters `baseNum`, `rotDigits`

declare variable `baseDigits` and init with array of digits of `baseNum`

declare variable `toRotate` and init with array of last `rotDigits` digits of `baseDigits`
declare variable `notRotate` and init with the other portion of `baseDigits`

rotate `toRotate`
  remove first element, then add it to the end of `toRotate`

declare variable `rotated` and init with `notRotate` concatenated with `toRotate`

merge `rotated` into single number by putting all the digits together
return merged number
*/

function rotateRightmostDigits(baseNum, rotDigits) {
  if (rotDigits <= 0) return baseNum;
  if (rotDigits > String(baseNum).length) return null;

  let baseDigits = String(baseNum).split("");

  let toRotate = baseDigits.slice(-rotDigits);
  let notRotate = baseDigits.slice(0, baseDigits.length - rotDigits);

  toRotate.push(toRotate.shift());

  let rotated = notRotate.concat(toRotate);
  let rotatedNum = Number(rotated.join(""));

  return rotatedNum;
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917
