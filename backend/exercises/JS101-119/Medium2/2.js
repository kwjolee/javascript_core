/*

PROBLEM
=====
input : three numbers
output : string

rules:
input numbers represent the length of three sides of a triangle
output string identifies which class of triangle the three sides make

definitions:
equilateral : all three sides equal
isosceles : two sides equal
scalene : all sides different
valid : sum of two shortest sides greater than longest side AND every side > 0
invalid : not valid

EXAMPLE
=====
3, 3, 3 => equilateral
3, 3, 1.5 => isosceles
3, 4, 5 => scalene
0, 3, 3 => invalid (0 length)
3, 1, 1, => 1 + 1 < 3

DATA STRUCTURE
=====
array : three sides?

ALGORITHM
=====
declare function `triangle` with parameters `side1`, `side2`, `side3`

declare variable `sides` and init with array whose elements are the inputs
sort `sides` in descending order
declare variable `longest` and init with first element of `sides`
declare variable `middle` and init with the second element of `sides`
declare variable `shortest` and init with the third element of `sides`

if `shortest` + `middle` is less than or equal to `longest`
  return 'invalid`
if `shortest` is 0
  return `invalid`
if all three sides are same
  return `equilateral`
if all three sides are different
  return `scalene`
otherwise
  return `isosceles`
*/

function triangle(side1, side2, side3) {
  let sides = [side1, side2, side3];
  sides.sort((a, b) => b - a);
  
  let longest = sides.shift();
  let middle = sides.shift();
  let shortest = sides.shift();

  if (shortest === 0) return "invalid";
  if ((shortest + middle) <= longest) return "invalid";
  if (shortest === middle && middle === longest && longest === shortest) return "equilateral";
  if (shortest !== middle && middle !== longest && longest !== shortest) return "scalene";
  return "isosceles";
}

console.log(triangle(3, 3, 3));
console.log(triangle(3, 3, 1.5));
console.log(triangle(3, 4, 5));
console.log(triangle(0, 3, 3));
console.log(triangle(3, 1, 1));
