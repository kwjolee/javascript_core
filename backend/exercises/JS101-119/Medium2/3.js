/* 7 minutes

PROBLEM
=====
input : three numbers (representing angles of a triangle)
output : string (representing type of triangle)

rules:
if a triangle is not valid as per the input angles, return `'invalid'`
  a valid triangle has:
    three angles sum to exactly 180
    every angle greater than 0
if one angle is exactly 90, then return `'right'`
if one angle is greater than 90, then return `'obtuse'`
if all angles are less than 90, then return `'acute'`

EXAMPLE
=====
60, 70, 50 => acute
30, 90, 60 => right
120, 50, 10 => obtuse
50, 50, 50 => invalid
0, 90, 90 => invalid

DATA STRUCTURES
=====
arrays?

ALGORITHM
=====
declare function triangle with parameters: ang1, ang2, ang3
if sum of parameters !== 180 || at least one parameter !> 0
  return "invalid"
if one parameter === 90
  return "right"
if one parameter > 90
  return "obtuse"
return "acute"
*/

function triangle(ang1, ang2, ang3) {
  let angSum = ang1 + ang2 + ang3;
  let angArr = [ang1, ang2, ang3];
  let zeroAng = angArr.filter(val => val <= 0);
  if (angSum !== 180 || zeroAng.length > 0) return "invalid";
  if (angArr.filter(val => val > 90).length > 0) return "obtuse";
  if (angArr.filter(val => val === 90).length > 0) return "right";
  return "acute";
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"