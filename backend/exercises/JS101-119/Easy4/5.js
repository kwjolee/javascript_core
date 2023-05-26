/*
input : array of numbers
output : new array of numbers
each element of the new array is the running total of elements in the input arr
running total is:
[1, 2, 3]
first running total is 1
second running total is 1 + 2
third running total is 1 + 2 + 3
*/

function runningTotal(inArray) {
  let outArray = [];
  for (let num of inArray) {
    let newNum = outArray[outArray.length - 1] + num || num;
    outArray.push(newNum);
  }
  return outArray;
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []