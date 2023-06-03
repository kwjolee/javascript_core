/* 6 minutes

PROBLEM
=====
input : array
output : number

rules :
input array is an array of integers
output number represents the array element that appears odd number of times

there will only be one array element that appears odd number of times
arrays with asingle element return that element

EXAMPLE
=====
[7] => 7
[0] => 0
[1, 1, 2] => 2
[0, 1, 0, 1, 0] => 0

DATA STRUCTURE
=====
arrays? objects?


ALGORITHM
=====
declare function `findOdd` with parameter `inputArray`

iterate through every element of `inputArray`
  if element occurs odd number of times :: helper?
    return element
  if not, move to next element
end iteration

helper :: occursOddTimes
input : number , array
output : boolean - whether `number` occurs odd times in `array`

filter `array` to a subarray that only contains `number`
if length of this subarray is odd
  return true
if not
  return false
*/

function findOdd(inputArray) {
  for (let number of inputArray) {
    if (occursOddTimes(number, inputArray)) return number;
  }
}

function occursOddTimes(number, inputArray) {
  let subArray = inputArray.filter(val => val === number);
  if (subArray.length % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

