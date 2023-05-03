function wordLengths(string = '') {
  if (string.length === 0) return outArray;
  return string.split(" ").map(word => `${word} ${word.length}`);
}

