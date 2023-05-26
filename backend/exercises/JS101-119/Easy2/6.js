/*
input : string of words separated by spaces
output : second to last word

rule : input always has at least two words
*/

function penultimate(string) {
  return string.split(" ").filter((_, ind, arr) => ind === arr.length - 2)[0];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true