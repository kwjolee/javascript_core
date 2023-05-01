const readline = require('readline-sync');

function invalidNumber(number) {
  return number.trim() === '' || isNaN(Number(number));
}

// eslint-disable-next-line max-lines-per-function
function askNumber(num) {
  let suffix = '';
  switch (num) {
    case 1:
      suffix = 'st';
      break;
    case 2:
      suffix = 'nd';
      break;
    case 3:
      suffix = 'rd';
      break;
    default:
      suffix = 'th';
  }
  let number = readline.question(`Enter the ${num}${suffix} number: `);
  while (invalidNumber(number)) {
    console.log('Please enter a valid number');
    number = readline.question(`Enter the ${num}${suffix} number: `);
  }
  return number;
}

const NUM1 = askNumber(1);
const NUM2 = askNumber(2);
const NUM3 = askNumber(3);
const NUM4 = askNumber(4);
const NUM5 = askNumber(5);
const NUM6 = askNumber(6);

if ([NUM1, NUM2, NUM3, NUM4, NUM5].includes(NUM6)) {
  console.log(`The number ${NUM6} appears in ${NUM1}, ${NUM2}, ${NUM3}, ${NUM4}, ${NUM5}.`);
} else {
  console.log(`The number ${NUM6} does not appear in ${NUM1}, ${NUM2}, ${NUM3}, ${NUM4}, ${NUM5}.`);
}

