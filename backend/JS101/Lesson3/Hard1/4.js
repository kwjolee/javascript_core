function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) return false;
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

// function isDotSeparatedIpAddress(inputString) {
//   let dotSeparatedWords = inputString.split(".");
//   while (dotSeparatedWords.length > 0) {
//     let word = dotSeparatedWords.shift();
//     if (!isAnIpNumber(word)) {

//       break;
//     }
//   }

//   return true;
// }

function isAnIpNumber(string) {
  return +string >= 0 && +string <= 255;
}

console.log(isDotSeparatedIpAddress("192.168.1.1.1"));