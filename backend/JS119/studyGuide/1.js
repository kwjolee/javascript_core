/* 15 minutes

PROBLEM
=====
input : array of numbers
output : array of numbers

rules :
output array is same size as input array
  for each input array element, count how many other elements are less than it
    if (other element) repeats, only count once
if input array length is 1, then output array length is 1 with element 0

?? empty input array

EXAMPLE
=====
[8, 1, 2, 2, 3] => [3, 0, 1, 1, 2]
  all 4 elements are less than 8 but 2 occurs twice, so only count once
  3 elements are less than 3 but 2 occurs twice, so only count once

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
helper :: filter array to only uniq element values
input : array
output : array
declare empty array
iterate through input array
  if value exists in declared array, skip
  if value does not, add to declared array
return declared array

helper :: count how many
input : array, target (number)
output : count (number)
iterate through array
  if element is less than target
    increment count by 1
return count
count starts at 0

helper :: remove current element from array
input : array, index
output : array
output array must be new array with value at index removed
use splice

declare function `smallerNumbersThanCurrent` with parameter `inputArr`
declare variable `outputArr` and init with empty array
iterate through elements of `inputArr`
  count how many of the other element values of `inputArr` are less than it :: helper?
    only count unique element values :: helper?
  add this count to `outputArr`
return `outputArr`

*/

function smallerNumbersThanCurrent(inputArr) {
  let outputArr = inputArr.map((val, ind) => {
    let subArr = getSubArr(inputArr, ind);
    let uniqSubArr = uniqArray(subArr);
    return countLessThan(uniqSubArr, val);
  });
  return outputArr;
}

// smallerNumbersThanCurrent([8, 1, 2, 2, 3])
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]

function getSubArr(arr, ind) {
  let subArr = arr.slice();
  subArr.splice(ind, 1);
  return subArr;
}

function uniqArray(arr) {
  let uniqArr = [];
  for (let val of arr) {
    if (!uniqArr.includes(val)) {
      uniqArr.push(val);
    }
  }
  return uniqArr;
}

function countLessThan(arr, target) {
  let count = 0;
  for (let val of arr) {
    if (val < target) {
      count += 1;
    }
  }
  return count;
}
