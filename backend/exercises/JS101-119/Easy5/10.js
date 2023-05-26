/*
input : array of integers
output : average of all integers rounded down
rule :
input array never empty
all elements are positive
*/

function average(arr) {
  let avg = parseInt(arr.reduce((acc, val) => acc + val, 0) / arr.length, 10);
  console.log(avg);
  return avg;
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40