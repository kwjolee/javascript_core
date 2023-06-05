// 15 min for non-regex solution
// eslint-disable-next-line max-lines-per-function
function madlibs(template) {
  const REPLACEMENT_TEXTS = {
    adjectives: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    nouns: ['fox', 'dog', 'head' ,'leg', 'tail', 'cat'],
    verbs: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    adverbs: ['easily', 'lazily', 'noisily', 'excitedly']
  };

  let words = template.split(" ");
  let newSentence = [];

  for (let word of words) {
    let newWord;
    let newVal;
    switch (true) {
      case word.includes("ADJECTIVE"):
        newVal = getRandomVal(REPLACEMENT_TEXTS.adjectives);
        newWord = word.replace("ADJECTIVE", newVal);
        break;
      case word.includes("NOUN"):
        newVal = getRandomVal(REPLACEMENT_TEXTS.nouns);
        newWord = word.replace("NOUN", newVal);
        break;
      case word.includes("ADVERB"):
        newVal = getRandomVal(REPLACEMENT_TEXTS.adverbs);
        newWord = word.replace("ADVERB", newVal);
        break;
      case word.includes("VERB"):
        newVal = getRandomVal(REPLACEMENT_TEXTS.verbs);
        newWord = word.replace("VERB", newVal);
        break;
      default:
        newWord = word;
    }
    newSentence.push(newWord);
  }

  return newSentence.join(" ");
}

function getRandomVal(arr) {
  let randInd = Math.floor(Math.random() * arr.length);
  return arr[randInd];
}

let template1 = "The ADJECTIVE brown NOUN ADVERB VERB the ADJECTIVE yellow NOUN, who ADVERB VERB his NOUN and looks around.";

console.log(madlibs(template1));

let template2 = "The NOUN VERB the NOUN's NOUN";

console.log(madlibs(template2));