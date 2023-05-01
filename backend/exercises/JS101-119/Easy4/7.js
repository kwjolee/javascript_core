function wordSizes(string) {
  if (string.length === 0) return {};
  let out = {};
  for (let word of string.split(" ")) {
    word = word.replace(/[^a-z]/gi,"");
    out[word.length] = out[word.length] + 1 || 1;
  }
  return out;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}