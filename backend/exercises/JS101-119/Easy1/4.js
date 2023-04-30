const readline = require('readline-sync');
const SQM_TO_SQFT = 10.7639;

let units = readline.question('Which unit are you using? (m / ft)\n');

let length = Number(readline.question('Enter the length of the room:\n'));

let width = Number(readline.question('Enter the width of the room:\n'));

let area;
switch (units) {
  case "m":
    units = "meters";
    area = (length * width).toFixed(2);
    break;
  case "ft":
    units = "feet";
    area = (length * width * SQM_TO_SQFT).toFixed(2);
    break;
}

console.log(`The area of the room is ${area} square ${units}.`);