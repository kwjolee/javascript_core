function duplicateEncode(word) {
  let newWord = "";
  word = word.toLowerCase();
  for (let char of word) {
    let ind1 = word.indexOf(char);
    let ind2 = word.lastIndexOf(char);
    if (ind1 === ind2) newWord += "(";
    else newWord += ")";
  }
  return newWord;
}