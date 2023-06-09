/* 11 minutes

PROBLEM
=====
input : array
output : array

rules:
output array counts
  how many times the input array element is greater than other elements
    only count difference against the same value once

EXAMPLE
=====
8, 1, 2, 2, 3
3, 0, 1, 1, 2

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `smallerNumbersThanCurrent` with parameter `inputArr`

declare variable `outputArr` and init with empty array

iterate through index position of `inputArr`
  declare variable `currentVal` and init with value of `inputArr` at current index
  declare variable `subArr` which is the `inputArr` without the current element
  declare variable `count` and init with 0
  declare variable `counted` and init with empty array
  iterate through elements of `subArr`
    if main element is larger than subelement
      if subelement does not exist in `counted`
        increment `count` by 1
        add subelement to `counted`
  end iteration
  add `count` to the end of `outputArr`
end iteration

return `outputArr`
*/

function smallerNumbersThanCurrent(inputArr) {
  let outputArr = [];

  inputArr.forEach((currentVal, ind) => {
    let subArr = inputArr.slice();
    subArr.splice(ind, 1);
    let count = 0;
    let counted = [];
    for (let subele of subArr) {
      if (currentVal > subele && !counted.includes(subele)) {
        count += 1;
        counted.push(subele);
      }
    }
    outputArr.push(count);
  });

  return outputArr;
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]