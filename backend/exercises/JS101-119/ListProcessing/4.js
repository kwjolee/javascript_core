function leadingSubstrings(string) {
  let outArr = [];
  let endInd = 1;
  while (endInd <= string.length) {
    outArr.push(string.slice(0, endInd));
    endInd += 1;
  }
  console.log(outArr);
}

leadingSubstrings('xyzzy');