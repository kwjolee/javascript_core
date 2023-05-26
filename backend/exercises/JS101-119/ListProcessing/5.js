function leadingSubstrings(string) {
  let outArr = [];
  let endInd = 1;
  while (endInd <= string.length) {
    outArr.push(string.slice(0, endInd));
    endInd += 1;
  }
  return outArr;
}

function substrings(string) {
  let outArr = [];
  let workStr = string;
  while (workStr.length > 0) {
    outArr.push(leadingSubstrings(workStr));
    workStr = workStr.slice(1);
  }
  outArr = outArr.flat(1);
  console.log(outArr);
}

substrings('abcde');