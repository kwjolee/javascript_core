
function wordSizes(string) {
  let outObj = {};
  if (string.length !== 0) {
    for (let word of string.split(" ")) {
      word = word.replace(/[^a-z]/gi,"");
      let wordCount = word.length;
      outObj[wordCount] = outObj[wordCount] + 1 || 1;
    }
  }
  return outObj;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}