const readline = require('readline-sync');

const firstNum = +readline.question("==> Enter the first number:\n");
const secondNum = +readline.question("==> Enter the second number:\n");

console.log(`==> ${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
console.log(`==> ${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
console.log(`==> ${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
console.log(`==> ${firstNum} / ${secondNum} = ${parseInt(firstNum / secondNum, 10)}`);
console.log(`==> ${firstNum} % ${secondNum} = ${firstNum % secondNum}`);
console.log(`==> ${firstNum} ** ${secondNum} = ${firstNum ** secondNum}`);