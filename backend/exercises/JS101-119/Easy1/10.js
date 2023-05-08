function multisum(number) {
  let outNumber = 0;
  for (let ind = 1; ind <= number; ind += 1) {
    if (ind % 3 === 0 || ind % 5 === 0) outNumber += ind;
  }
  return outNumber;
}

console.log(multisum(1000));