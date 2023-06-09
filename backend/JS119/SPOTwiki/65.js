/* 6 minutes basically no PEDAC

currentString = str

if currentString contains spaces
  separate all words by spaces
  reverse every word
  combined every other word together
  join all words using spaces
  set currentString to that
repeat line 5

return currentString
*/

function reverse_and_combine_text(str) {
  let currentString = str;

  while (currentString.includes(" ")) {
    let words = currentString.split(" ");
    let tempstring = [];
    for (let ind = 0; ind < words.length; ind += 2) {
      let subwords = words.slice(ind, ind + 2);
      subwords = subwords.map(word => word.split("").reverse().join(""));
      let subword = subwords.reduce((acc, val) => acc + val, "");
      tempstring.push(subword);
    }
    currentString = tempstring.join(" ");
  }
  return currentString;
}

console.log(reverse_and_combine_text("abc def gh34 434ff 55_eri 123 343"))