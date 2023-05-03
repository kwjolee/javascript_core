function sumOfSums(array) {
  let sum = 0;
  for (let length = 1; length <= array.length; length += 1) {
    sum += array.slice(0,length).reduce((acc, val) => acc + val,0);
  }
  return sum;
}

console.log(sumOfSums([3, 5, 2]));