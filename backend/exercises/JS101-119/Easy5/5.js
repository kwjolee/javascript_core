function interleave(array1, array2) {
  let out = [];
  array1.forEach((_,idx) => out.push(array1[idx], array2[idx]));
  return out;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]