/*
input : number
output : string of triangle that has sides of `number` many `*`s
*/

function triangle(number) {
  let numSpace = number;
  let numStar = 0;
  while (numStar <= number) {
    console.log(`${" ".repeat(numSpace)}${"*".repeat(numStar)}`);
    numSpace -= 1;
    numStar += 1;
  }
}

triangle(5);
triangle(9);