// 2 minutes no PEDAC
function stringTransformer(str) {
  let strArr = str.split(" ");
  let outArr = [];
  for (let word of strArr) {
    let newWord = "";
    for (let letter of word) {
      if (letter.toLowerCase() === letter) {
        newWord += letter.toUpperCase();
      } else {
        newWord += letter.toLowerCase();
      }
    }
    outArr.push(newWord);
  }
  return outArr.reverse().join(" ");
}