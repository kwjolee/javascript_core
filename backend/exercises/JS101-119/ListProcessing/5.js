function leadingSubstrings(string) {
  let strings = [];
  string.split("").reduce((acc, letter) => {
    acc += letter;
    strings.push(acc);
    return acc;
  },"");
  return strings;
}

function substrings(string) {
  let allSubstrings = [];
  for (let ind = 0; ind < string.length; ind += 1) {
    allSubstrings.push(leadingSubstrings(string.slice(ind)));
  }
  return allSubstrings.flat();
}

console.log(substrings('abcde'));