function removeVowels(array) {
  let outArr = [];
  const VOWELS = 'aeiouAEIOU';
  for (let word of array) {
    let newWord = "";
    for (let char of word.split("")) {
      if (!VOWELS.includes(char)) newWord += char;
    }
    outArr.push(newWord);
  }
  console.log(outArr);
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]