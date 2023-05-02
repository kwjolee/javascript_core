function union(array1, array2) {
  array2.forEach(value => {
    if (!array1.includes(value)) array1.push(value);
  });
  return array1;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]