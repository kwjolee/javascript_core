function swap(string) {
  let out = [];
  for (let word of string.split(" ")) {
    if (word.length === 1) {
      out.push(word);
    } else {
      out.push(word[word.length - 1] + word.slice(1,-1) + word[0]);
    }
  }
  return out.join(" ");
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
