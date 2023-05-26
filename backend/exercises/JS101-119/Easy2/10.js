const readline = require('readline-sync');

let age = Number(readline.question('What is your age? '));
let retire = Number(readline.question('At what age would you like to retire? '));

let yearToGo = retire - age;
let yearNow = 2023;

console.log(`It's ${yearNow}. You will retire in ${yearNow + yearToGo}.`);
console.log(`You have only ${yearToGo} years of work to go!`);