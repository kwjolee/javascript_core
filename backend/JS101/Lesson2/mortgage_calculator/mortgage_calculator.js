///// requirements
const readline = require('readline-sync');

// convert message to system prompt
function prompt(message) {
  console.log(`\n===> ${message}\n`);
}

// get loan amount (principal)
function getPrincipal() {
  prompt("What is the loan amount? ($)");
  let principal = readline.question("$ ");
  while (invalidNumber(principal)) {
    prompt("Invalid entry. Please enter a number:");
    prompt("What is the loan amount? ($)");
    principal = readline.question("$ ");
  }
  return Number(principal);
}

// get APR (must decide % or decimal)
// monthly is just APR / 12
// return in number
function getMonthlyAPR() {
  prompt("What is the Annual Percentage Rate? (%)");
  let APR = readline.question();
  while (invalidNumber(APR)) {
    prompt("Invalid entry. Please enter a number:");
    prompt("What is the Annual Percentage Rate? (%)");
    APR = readline.question();
  }
  return Number(APR) / 12 / 100;
}

// get loan duration in years
// return in number
function getLoanDuration() {
  prompt("What is the loan duration? (years)");
  let loanDuration = readline.question();
  while (invalidNumber(loanDuration)) {
    prompt("Invalid entry. Please enter a number:");
    prompt("What is the loan duration?");
    loanDuration = readline.question();
  }
  return Number(loanDuration * 12);
}

// calculate monthly interest rate
function calcMonthlyPay(principal, APR, loanDuration) {
  if (APR === 0) return principal / loanDuration;
  return principal * (APR / (1 - Math.pow((1 + APR), (-loanDuration))));
}

// check if input is a valid number
function invalidNumber(numberString) {
  return isNaN(Number(numberString)) || numberString === '';
}

// print payment amount as dollar and cents $123.45
function showPaymentAmount(MonthlyPay) {
  prompt(`Your monthly payment amount is $${MonthlyPay.toFixed(2)}.`);
}

// ask if another calculation is wanted
function askDoAgain() {
  let allowedEntries = ['y', 'n', 'yes', 'no'];
  prompt("Would you like to do another payment calculation? (y)es/(n)o");
  let doAgain = readline.question().toLowerCase();
  while (!allowedEntries.includes(doAgain)) {
    prompt("Invalid entry. Please enter (y)es or (n)o");
    doAgain = readline.question().toLowerCase();
  }
  return doAgain[0] === "y";
}

function exitCalc() {
  console.clear();
  prompt("Thank you for using Mortage Calculator.");
}


///// UI/UX
// personal touch?


///// edge cases
// zero interest loan
// non integer number of years


///// run program

console.clear();
prompt("Welcome to the Mortgage Calculator");

do {

  let principal = getPrincipal();
  let APR = getMonthlyAPR();
  let loanDuration = getLoanDuration();
  let MonthlyPay = calcMonthlyPay(principal, APR, loanDuration);

  showPaymentAmount(MonthlyPay);

} while (askDoAgain());
exitCalc();