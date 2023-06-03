function sumSquareDifference(number) {
  let manyNums = [];
  for (let ind = 1; ind <= number; ind += 1) {
    manyNums.push(ind);
  }
  let firstNum = manyNums.reduce((acc, val) => acc + val, 0) ** 2;
  let secondNum = manyNums.map(val => val ** 2).reduce((acc, val) => acc + val, 0);
  return firstNum - secondNum;
}

console.log(sumSquareDifference(100));