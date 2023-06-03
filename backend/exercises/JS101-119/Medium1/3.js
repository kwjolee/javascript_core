/* 30 minutes

PROBLEM
=====
input : number
output : rotated number

rules:
the input number is rotated maximally
the first digit is in place and the remaining digits rotate to the left
with the resulting rotated digit, first two digits are in place and remaining digits rotated
...continue until the final two digits get rotated

if input number is 1 digit, then same digit is returned
if input number is 2 digits, then digits are swapped

EXAMPLES
=====
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(735291);          // 321579

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `maxRotation` with one parameter `number`
declare variable `numberStr` and init with string version of `number`
if length of `numberStr` is 1, then return `numberStr` in number form
if length of `numberStr` is 2, then return `numberStr` element swapped in number form

declare variable `digitsToRotate` and init with (length of `numberStr` - 1)
declare variable `rotatedNumber` and init with empty string
declare variable `remainingDigits` and init with `numberStr`

enter while loop
  if digitsToRotate is greater than 2
    add first digit of `remainingDigits` to `rotatedNumber`
    rotate `remainingDigits` and reassign `remainingDigits` with it
    reassign `digitsToRotate` with length of `remainingDigits` - 1
  break of digitsToRotate is less than 2

return `rotatedNumber`
*/

function maxRotation(number) {
  let numberStr = String(number);
  if (numberStr.length === 1) return Number(numberStr);
  if (numberStr.length === 2) return Number(rotateRightmostDigits(numberStr, 2));

  let digitsToRotate = numberStr.length - 1;
  let rotatedNumber = '';
  let remainingDigits = numberStr;

  while (digitsToRotate >= 2) {
    remainingDigits = rotateRightmostDigits(remainingDigits, remainingDigits.length);
    rotatedNumber += remainingDigits[0];
    remainingDigits = remainingDigits.slice(1);
    digitsToRotate -= 1;
  }
  return Number(rotatedNumber + rotateRightmostDigits(remainingDigits, 2));
}

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

  let rotatedNumber = (leadDigits + rotatedCountDigits);

  return rotatedNumber;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845