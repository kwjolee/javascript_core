/*
input : string
output : bannerized string
top and bottom lines are `+----+`
buffer lines are `|     |`
middle line is `| inputstring |`
*/

function logInBox(string) {
  let topline = "+" + "-".repeat(string.length + 2) + "+";
  let buffer = "|" + " ".repeat(string.length + 2) + "|";
  let midline = "| " + string + " |";
  console.log(topline);
  console.log(buffer);
  console.log(midline);
  console.log(buffer);
  console.log(topline);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');