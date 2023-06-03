/* 11 minutes

PROBLEM
=====
input : two numbers
  `number` : first number is the number to rotate
  `count` : second number is how many digits to rotate
output : rotated number

rules:
  last `count` digits of `number` get rotated
  rotation means : the last `count` many digits get rotated to the left while the remaining leading digits remain in place

EXAMPLE
=====
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

DATA STRUCTURE
arrays

ALGORITHM
=====
declare function `rotateRightmostDigits`
  first parameter : `number`
  second parameter : `count`

declare variable `numberStr` and initialize with `number` coerced to a string
declare variable `countDigits` and init with the last `count` characters of `number`
declare variable `leadDigits` and init with the remaining characters of `number`
  :if `count` is equal to the number of characters, then `leadDigits` will be an empty string

declare variable `rotatedCountDigits` and init with rotated version of `countDigits`

concat `leadDigits` with `rotatedCountDigits` then return the Number version of it
*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];

  let outArr = arr.slice();
  let firstEl = outArr.shift();
  outArr.push(firstEl);

  return outArr;
}

function rotateRightmostDigits(number, count) {
  let numberStr = String(number);
  let countDigits = numberStr.slice(numberStr.length - count);
  let leadDigits = numberStr.slice(0, numberStr.length - count);
  let rotatedCountDigits = rotateArray(countDigits.split("")).join("");

  let rotatedNumber = Number(leadDigits + rotatedCountDigits);

  return rotatedNumber;
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917