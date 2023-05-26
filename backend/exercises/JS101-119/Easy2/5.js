const readline = require('readline-sync');

let firstNum = Number(readline.question("==> Enter the first number:\n"));
let secondNum = Number(readline.question("==> Enter the second number:\n"));

console.log(`==> ${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
console.log(`==> ${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
console.log(`==> ${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
console.log(`==> ${firstNum} / ${secondNum} = ${parseInt(firstNum / secondNum, 10)}`);
console.log(`==> ${firstNum} % ${secondNum} = ${firstNum % secondNum}`);
console.log(`==> ${firstNum} ** ${secondNum} = ${firstNum ** secondNum}`);
