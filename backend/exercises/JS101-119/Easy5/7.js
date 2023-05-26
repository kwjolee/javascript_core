/*
input : two arrays
output :
one array
  each element is the product of the same index of the two inputs
rule :
inputs contain same number of elements
*/

function multiplyList(arr1, arr2) {
  let outArr = [];
  for (let ind = 0; ind < arr1.length; ind += 1) {
    outArr.push(arr1[ind] * arr2[ind]);
  }
  return outArr;
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]