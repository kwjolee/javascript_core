/*

PROBLEM
=====
input : three numbers
output : string

input numbers represent the three angles of a triangle
output string indicates which type of triangle the three sides make
  * right : one angle is 90 degrees
  * acute : all three angles are < 90
  * obtuse : one angle is > 90
  valid : angles sum to 180 AND every angle > 0
  * invalid : not valid

EXAMPLE
=====
60, 70, 50 => acute
30, 90, 60 => right
120, 50, 10 => obtuse
0, 90, 90 => invalid
50, 50, 50 => invalid
70, 70, 70 => invalid

DATA STRUCTURE
=====
array : of the three input angles

ALGORITHM
=====
declare function `triangle` with parameters `ang1`, `ang2`, `ang3`

declare variable `angles` and init with an array of the input angles

if there is any angle that is <= 0 degrees OR if the sum of the angles is not 180 :: helper function
  return `invalid`

if there is one angle that is exactly 90
  return 'right'
if there is one angle that is > 90
  return 'obtuse'
otherwise
  return 'acute'
*/

function triangle(ang1, ang2, ang3) {
  let angles = [ang1, ang2, ang3];

  if (!isValid(angles)) return 'invalid';

  if (angles.filter(val => val === 90).length > 0) return 'right';
  if (angles.filter(val => val > 90).length > 0) return 'obtuse';
  return 'acute';
}

function isValid(arr) {
  if (arr.reduce((acc, val) => acc + val, 0) !== 180) return false;
  if (arr.filter(val => val <= 0).length !== 0) return false;
  return true;
}

console.log(triangle(60, 70, 50))
console.log(triangle(30, 90, 60))
console.log(triangle(120, 50, 10))
console.log(triangle(0, 90, 90))
console.log(triangle(50, 50, 50))
console.log(triangle(70, 70, 70))