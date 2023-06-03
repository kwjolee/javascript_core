/* 11 minutes

PROBLEM
=====
input : 3 numbers representing the length of each side of a triangle
output : string
  whether the input triangle is valid
    if it is, then what type of triangle it is

rules :
if input triangle is not valid, then return "invalid"
  valid triangle has:
    each side length greater than 0
    sum of length of two short sides is greater than length of the longest side
if all three sides are equal, then return "equilateral"
if two sides are equal, the return "isosceles"
if all three sides are different, then return "scalene"

EXAMPLE
=====
3, 3, 3 => equilateral
3, 3, 0 => invalid
3, 4, 5 => scalene
3, 3, 1.5 => isosceles

DATA STRUCTURES
=====
arrays

ALGORITHM
=====
declare function `triangle` with three parameters `len1`, `len2`, `len3`
if at least one of the parameters is 0, return "invalid"
if sum of two shorter sides is not greater than the longest side, return "invalid"
if all three sides are equal, return "equilateral"
if two sides are equal, return "isosceles"
otherwise return "scalene"
*/

function triangle(len1, len2, len3) {
  let lenArray = [len1, len2, len3];
  if (lenArray.filter(val => val === 0).length > 0) return "invalid";
  let longest = Math.max(len1, len2, len3);
  let shortest = Math.min(len1, len2, len3);
  let middle = (len1 + len2 + len3) - (longest + shortest);
  if ((middle + shortest) <= longest) return "invalid";
  if (longest === shortest) return "equilateral";
  if (longest === middle) return "isosceles";
  return "scalene";
}

console.log(triangle(3, 3, 3));
console.log(triangle(3, 3, 1.5));
console.log(triangle(3, 4, 5));
console.log(triangle(0, 3, 3));
console.log(triangle(3, 1, 1));