/*
input : two integers
  first integer is `count`
  second integer is starting number
output : array
  starting with starting number
  `count` many elements
  each element incremented by starting number
*/

function sequence(count, startNum) {
  let outArr = [];
  while (outArr.length !== count) {
    outArr.push((outArr.length + 1) * startNum);
  }
  console.log(outArr);
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []