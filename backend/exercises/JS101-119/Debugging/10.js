function neutralize(sentence) {
  let words = sentence.split(" ");
  let posWords = [];

  words.forEach(word => {
    if (!isNegative(word)) {
      posWords.push(word);
    }
  });

  return posWords.join(" ");
}

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}

console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);

console.log(
  neutralize("The cards of this game are boring.")
);
