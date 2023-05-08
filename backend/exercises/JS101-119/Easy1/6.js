const readline = require('readline-sync');

function sum(num) {
  if (num === 1) return 1;
  return num + sum(num - 1);
}

function prod(num) {
  if (num === 1) return 1;
  return num * prod(num - 1);
}

let userNumber = +readline.question("Please enter an integer greater than 0: ");
let operation = readline.question('Enter "s" to compute the sum, or "p" to compute the product.');

let outNumber;
let operationLabel;

switch (operation) {
  case "s":
    outNumber = sum(userNumber);
    operationLabel = "sum";
    break;
  case "p":
    outNumber = prod(userNumber);
    operationLabel = "product";
    break;
}

console.log(`The ${operationLabel} of the integers between 1 and ${userNumber} is ${outNumber}.`);