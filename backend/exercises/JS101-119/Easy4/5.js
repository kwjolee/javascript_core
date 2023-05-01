function runningTotal(array) {
  let runningSum = 0;
  let out = [];
  for (let ind = 0; ind < array.length; ind += 1) {
    out.push(runningSum += array[ind]);
  }
  return out;
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []