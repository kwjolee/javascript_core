function penultimate(string) {
  return string.split(" ").filter((_, idx, array) => idx === array.length - 2)[0];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true