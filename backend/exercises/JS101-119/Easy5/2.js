/*
input : two arrays
output : two arrays combined with no duplicates
*/

function union(arr1, arr2) {
  let outObj = {};
  for (let num of arr1) {
    outObj[num] = 0;
  }
  for (let num of arr2) {
    outObj[num] = 0;
  }
  let outArr = [];
  for (let key in outObj) {
    outArr.push(Number(key));
  }

  return outArr;
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]