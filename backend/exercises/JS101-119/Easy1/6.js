const readline = require('readline-sync');

function getSum(number) {
  let output = 0;
  for (let add = 1; add <= number; add += 1) {
    output += add;
  }
  return output;
}

function getProduct(number) {
  let output = 1;
  for (let mult = 1; mult <= number; mult += 1) {
    output *= mult;
  }
  return output;
}

function invalidNumber(number) {
  return number <= 0 || isNaN(Number(number)) || number.trim() === '';
}

function getNumber() {
  let num = readline.question("Please enter an integer greater than 0: ");
  while (invalidNumber(num)) {
    console.log("Invalid entry.");
    num = readline.question("Please enter an integer greater than 0: ");
  }
  return parseInt(num, 10);
}

function getOperation() {
  let operation = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ');
  while (!['s', 'p'].includes(operation)) {
    console.log("Invalid entry.");
    operation = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ');
  }
  return operation;
}

let num = getNumber();
let operation = getOperation();
let output;

switch (operation) {
  case "s":
    output = getSum(num);
    operation = "sum";
    break;
  case "p":
    output = getProduct(num);
    operation = "product";
    break;
}

console.log(`The ${operation} of the integers between 1 and ${num} is ${output}.`);