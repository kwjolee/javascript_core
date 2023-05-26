function reverseWords(string) {
  let strArr = string.split(" ");
  let outArr = [];
  for (let word of strArr) {
    if (word.length >= 5) {
      let revWord = word.split("").reverse().join("");
      outArr.push(revWord);
    } else {
      outArr.push(word);
    }
  }
  let outStr = outArr.join(" ");
  console.log(outStr);
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"