function wordLengths(string) {
  let outArr = [];
  if (!string) return outArr;
  for (let word of string.split(" ")) {
    let newWord = word + " " + word.length;
    outArr.push(newWord);
  }
  console.log(outArr);
  return outArr;
}

wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []