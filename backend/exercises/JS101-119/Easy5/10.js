function average(array) {
  return parseInt((array.reduce((acc, val) => acc + val,0) / array.length), 10);
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40