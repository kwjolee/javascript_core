function logInBox(string, maxWidth = string.length + 4) {
  if (maxWidth < 5) console.log("Window set too narrow -- width must be at least 5");
  console.log(`+${'-'.repeat(maxWidth - 2)}+`);
  console.log(`|${' '.repeat(maxWidth - 2)}|`);

  let outString = '';
  let maxStringLength = maxWidth - 4;
  let totalIter = Math.ceil(string.length / maxStringLength);

  for (let ind = 1; ind <= totalIter; ind += 1) {
    let startInd = (ind - 1) * maxStringLength;
    let endInd = ((ind - 1) * maxStringLength) + maxStringLength;
    outString = string.substring(startInd, endInd);
    while (outString.length !== (maxWidth - 4)) {
      outString += ' ';
    }
    console.log(`| ${outString} |`);
  }

  console.log(`|${' '.repeat(maxWidth - 2)}|`);
  console.log(`+${'-'.repeat(maxWidth - 2)}+`);
}

logInBox('To boldly go where no one has gone before.', 18);
