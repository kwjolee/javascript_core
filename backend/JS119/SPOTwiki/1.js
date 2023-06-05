function letterCount(s) {
  let obj = {};
  for (let letter of s) {
    obj[letter] = obj[letter] + 1 || 1;
  }
  return obj;
}
