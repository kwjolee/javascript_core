const readline = require('readline-sync');

let bill = Number(readline.question('What is the bill? '));

let tip = Number(readline.question('What is the tip percentage? '));

function getTip(bill, tip) {
  return ((tip / 100) * bill).toFixed(2);
}

function getTotal(bill, tip) {
  return (+getTip(bill, tip) + bill).toFixed(2);
}

console.log(`The tip is $${getTip(bill, tip)}`);
console.log(`The total is $${getTotal(bill, tip)}`);