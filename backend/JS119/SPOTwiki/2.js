/* 9 minutes

PROBLEM
=====
input : array
output : number

rules :
input array can contain any number of integers
output number indicates how many pairs of numbers occur in the input array
  if a pair is found more than once, count more than once

EXAMPLE
=====
[1, 2, 5, 6, 5, 2] => 2 // 2 occurs twice, 5 occurs twice :: 2 pairs
[1, 2, 2, 20, 6, 20, 2, 6, 2] => 4 // 2 occurs 4 times, 20 occurs twice, 6 occurs twice :: 4 pairs

?? if a number occurs 3 times, it counts as 1 pair?

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `duplicates` with parameter `array`
declare variable `pairs` and init with 0
declare variable `arrayCopy` and init with copy of `array`

perform as long as `arrayCopy` has length > 0
  get first element of `arrayCopy`
  check if that element occurs again
    if yes
      increment `pairs` by 1
      remove first element from `arrayCopy`
      remove first repeat element from `arrayCopy`
    if no
      remove first element from `arrayCopy`
  repeat until no more element remains
end perform

return `pairs`
*/

function duplicates(array) {
  let pairs = 0;
  let arrayCopy = array.slice();

  while (arrayCopy.length > 0) {
    let firstEl = arrayCopy[0];
    let repeatInd = arrayCopy.lastIndexOf(firstEl);
    if (repeatInd !== 0) {
      pairs += 1;
      arrayCopy.splice(repeatInd, 1);
      arrayCopy.splice(0, 1);
    } else {
      arrayCopy.splice(0, 1);
    }
  }

  return pairs;
}

console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]));