function solve(n, k) {
  let nStr = String(n);
  let min = Infinity;
  let targetLength = String(n).length - k;

  while (k > 0) {
    for (let ind = 0; ind < nStr.length; ind += 1) {
      let num = Number(nStr.slice(0, ind) + nStr.slice(ind + 1));
      if (num < min) min = num;
    }
    nStr = String(min);
    k -= 1;
  }

  let diff = targetLength - String(min).length;

  return "0".repeat(diff) + String(min);
}

console.log(solve(123056,1)); // 12056
console.log(solve(123056,2)); // 1056
console.log(solve(123056,3)); // 056
console.log(solve(123056,4)); // 05
console.log(solve(1284569,1)); // 124569
console.log(solve(1284569,2)); // 12456
console.log(solve(1284569,3)); // 1245
console.log(solve(1284569,4)); // 124

