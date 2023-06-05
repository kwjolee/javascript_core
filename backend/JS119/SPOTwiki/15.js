/* 8 minutes

PROBLEM
=====
input : array
output : boolean

rules:
input array contains single letter strings
  strings indicate directions
    will only be "e", "w", "s", or "n"

each "direction" takes 1 minute to traverse
must take exactly 10 minutes to traverse all directions
must return to starting spot

output is `true` if
  time taken is exactly 10 minutes
  ending spot is same as starting spot
otherwise `false`

EXAMPLE
=====
"w" => false // does not return to starting spot
"w", "e" => true // takes less than 10 minutes
"w", "e", "w", "e", "w", "e", "w", "e", "w", "e" => true // 10 minutes, return to starting spot

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `isValidWalk` with parameter `walk`

if length of `walk` array is not 10, then return `false`

declare variable `eastWest` and `southNorth`, init both with `0`

iterate through every string of `walk`
  if east, increase `eastWest` by 1
  if west, decrease `eastWest` by 1
  if south, increase `southNorth` by 1
  if north, decrease `southNorth` by 1
end iteration

if `eastWest` and `southNorth` are both `0` then return `true`

otherwise return `false`
*/

function isValidWalk(walk) {
  if (walk.length !== 10) return false;

  let eastWest = 0;
  let southNorth = 0;

  for (let direction of walk) {
    if (direction === "e") eastWest += 1;
    if (direction === "w") eastWest -= 1;
    if (direction === "s") southNorth += 1;
    if (direction === "n") southNorth -= 1;
  }

  if (eastWest === 0 && southNorth === 0) return true;

  return false;
}

