/*
input
from user : integer greater than 0
from user : whether to sum or product

output : sum or product from 1 to user provided integer, inclusive
*/

const readline = require('readline-sync');

let userNumber = readline.question('Please enter an integer greater than 0: ');
let userOp = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ');

let allNumbers = [];
for (let ind = 1; ind <= Number(userNumber); ind += 1) {
  allNumbers.push(ind);
}

let result;
switch (userOp) {
  case "s":
    result = allNumbers.reduce((acc, val) => acc + val, 0);
    userOp = "sum";
    break;
  case "p":
    result = allNumbers.reduce((acc, val) => acc * val, 1);
    userOp = "product";
    break;
}

console.log(`The ${userOp} of the integers between 1 and ${userNumber} is ${result}.`);