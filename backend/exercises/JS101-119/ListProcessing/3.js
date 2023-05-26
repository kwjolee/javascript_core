function multiplyAllPairs(arr1, arr2) {
  let outArr = [];
  for (let num1 of arr1) {
    for (let num2 of arr2) {
      outArr.push(num1 * num2);
    }
  }
  outArr.sort((a, b) => a - b);
  console.log(outArr);
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]