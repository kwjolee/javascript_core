function multiplyAllPairs(array1, array2) {
  let allPairs = [];
  for (let element1 of array1) {
    for (let element2 of array2) {
      allPairs.push(element1 * element2);
    }
  }
  return allPairs.sort((a, b) => a - b);
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);