function isBalanced(string) {
  let parCount = 0;
  for (let ind = 0; ind < string.length; ind += 1) {
    if (string[ind] === "(") parCount += 1;
    if (string[ind] === ")") parCount -= 1;
    if (parCount < 0) return false;
  }
  return parCount === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);