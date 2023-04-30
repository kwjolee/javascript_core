const rlSync = require('readline-sync');
const CURRENT_YEAR = new Date().getFullYear();

function getUserAge() {
  return Number(rlSync.question('What is your age? \n'));
}

function getRetirementAge() {
  return Number(rlSync.question('What age would you like to retire? \n'));
}

function userInformation (user) {
  user.age = getUserAge();
  user.retirementAge = getRetirementAge();
}

function retirementInformation(user, currentYear) {
  user.retirementYear = currentYear + (user.retirementAge - user.age);
  user.workYearsLeft = user.retirementYear - currentYear;
}

function printRetirementYear(user, currentYear) {
  console.log(`It's ${currentYear}. You will retire in ${user.retirementYear}.`);
}

function printWorkYearsLeft(user) {
  console.log(`You have only ${user.workYearsLeft} years of work to go!`);
}

function programLoop() {
  const user = {
    age: 0,
    retirementAge: 0,
    reitrementYear: 0,
    workYearsLeft: 0
  };

  userInformation(user);
  retirementInformation(user, CURRENT_YEAR);
  printRetirementYear(user, CURRENT_YEAR);
  printWorkYearsLeft(user);
}

programLoop();