function stringy(number) {
  let outString = '';
  let prevChar = 0;
  while (outString.length < number) {
    if (prevChar === 0) {
      outString += prevChar += 1;
    } else if (prevChar === 1) {
      outString += prevChar -= 1;
    }
  }
  return outString;
}

console.log(stringy(7));