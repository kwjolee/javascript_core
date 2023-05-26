function wordCap(string) {
  let strArr = string.split(" ");
  let newStr = [];
  for (let word of strArr) {
    let newWord = word[0].toUpperCase() + word.slice(1);
    newStr.push(newWord);
  }
  let outStr = newStr.join(" ");
  console.log(outStr);
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'

