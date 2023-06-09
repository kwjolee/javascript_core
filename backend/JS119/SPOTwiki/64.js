// 2 minhtes no PEDAC
function isIntArray(arr) {
  if (!arr) return false;
  if (arr.length === 0) return true;
  for (let number of arr) {
    if (number !== parseInt(number, 10)) return false;
  }
  return true;
}