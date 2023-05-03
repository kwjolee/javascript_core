let title = "Flintstone Family Members";

let frontSpace = 0;
let backSpace = 0;
if (title.length % 2 !== 0) {
  frontSpace = Math.floor((40 - title.length) / 2);
  backSpace = 40 - title.length - frontSpace;
} else {
  frontSpace = (40 - title.length) / 2;
  backSpace = frontSpace;
}

console.log("|" + " ".repeat(frontSpace) + title + " ".repeat(backSpace) + "|");