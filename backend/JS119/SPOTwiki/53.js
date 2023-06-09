function toWeirdCase(str) {
  let arr = str.split(" ");
  return arr.map(word => {
    let newWord = "";
    for (let ind = 0;ind < word.length; ind += 1) {
      letter = word[ind];
      if (ind % 2 === 0) {
        newWord += letter.toUpperCase();
      } else {
        newWord += letter.toLowerCase();
      }
    }
    return newWord;
  }).join(" ");
}