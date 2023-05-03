function reverseWords(sentence) {
  let out = [];

  for (let word of sentence.split(" ")) {
    if (word.length >= 5) {
      out.push(word.split("").reverse().join(""));
    } else {
      out.push(word);
    }
  }
  return out.join(" ");
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"