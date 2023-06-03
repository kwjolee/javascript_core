/* 5 minute for ordinary solution, 7 minutes for faster solution

PROBLEM
=====
input : array
output : number

rules :
input array contains numbers
output number is the element of the input array that only occurs once

input array length is >= 3

EXAMPLE
=====
[1, 1, 1, 2, 1, 1] => 2
[0, 0, 0.55, 0, 0] => 0.55

DATA STRUCTURE
=====
arrays?

ALGORITM
=====
declare function `findUniq` with parameter `inputArr`

iterate through every element of `inputArr`
  filter `inputArr` to `subArray` that only consists of given element
    if `subArray` length is 1, then return element
    if not, move to next element
end iteration

*/

function findUniq(inputArr) {
  let sortedInp = inputArr.sort((a, b) => a - b);

  if (sortedInp[0] === sortedInp[1]) return sortedInp[sortedInp.length - 1];
  else return sortedInp[0];
}

