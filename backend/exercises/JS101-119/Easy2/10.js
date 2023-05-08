const rlSync = require('readline-sync');

let age = +rlSync.question("What is your age? ");
let retireAge = +rlSync.question("At what age would you like to retire? ");

let yearsToRetire = retireAge - age;
let thisYear = 2017;

console.log(`It's ${thisYear}. You will retire in ${thisYear + yearsToRetire}`);
console.log(`You only have ${yearsToRetire} years of work to go!`);