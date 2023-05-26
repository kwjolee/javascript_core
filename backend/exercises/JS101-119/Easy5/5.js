/*
input : two arrays
output : one array, combining the two input arrays
  output array elements are alternating input array elements
*/

function interleave(arr1, arr2) {
  let outArr = [];
  for (let ind = 0; ind < arr1.length; ind += 1) {
    outArr.push(arr1[ind]);
    outArr.push(arr2[ind]);
  }
  return outArr;
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]