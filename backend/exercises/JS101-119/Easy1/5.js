const readline = require('readline-sync');

let bill = Number(readline.question('What is the bill? '));
let tipPerc = Number(readline.question('What is the tip percentage? ')) / 100;

let tipAmt = bill * tipPerc;
let total = bill + tipAmt;

console.log(`The tip is $${tipAmt.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);