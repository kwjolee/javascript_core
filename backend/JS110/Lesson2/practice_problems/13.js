let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a, b) => {
  let aSum = a.reduce((acc, val) => {
    return val % 2 !== 0 ? acc + val : acc;
  }, 0);
  let bSum = b.reduce((acc, val) => {
    return val % 2 !== 0 ? acc + val : acc;
  }, 0);
  return aSum - bSum;
});

console.log(arr);