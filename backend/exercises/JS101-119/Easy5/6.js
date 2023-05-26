/*
input : array of integers
output : multiply all elements of the integers
  then divide the result by number of elements
    then round to 3 decimals
      then turn it into string
*/

function multiplicativeAverage(arr) {
  let outNum = (arr.reduce((acc, val) => acc * val, 1) / arr.length).toFixed(3);
  return outNum;
}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"