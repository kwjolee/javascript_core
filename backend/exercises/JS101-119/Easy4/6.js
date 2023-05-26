/*
input : string of space separated words
output : object
  this object has keys of word count of each word
    and values of how many of each word count occurs
*/

function wordSizes(string) {
  let outObj = {};
  if (string.length !== 0) {
    for (let word of string.split(" ")) {
      let wordCount = word.length;
      outObj[wordCount] = outObj[wordCount] + 1 || 1;
    }
  }
  return outObj;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}