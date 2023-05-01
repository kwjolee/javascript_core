const readline = require('readline-sync');
const MESSAGES = require ('./messages.json');

function prompt(message) {
  console.log(`\n===> ${message}\n`);
}

function askUnit(item) {
  if (item === "askPrincipal") return "$";
  let allowedUnits = MESSAGES["allowedUnits"][item];
  prompt(MESSAGES["units"][item]);
  let unit = readline.question();
  while (!allowedUnits.includes(unit)) {
    prompt(MESSAGES["invalidGeneral"]);
    unit = readline.question();
  }
  return convertUnits(unit);
}

function convertUnits(unit) {
  let unitConverted;
  if (unit[0] === "p") {
    unitConverted = "%";
  } else if (unit[0] === "d") {
    unitConverted = "";
  } else if (unit[0] === "y") {
    unitConverted = "years";
  } else if (unit[0] === "m") {
    unitConverted = "months";
  }
  return unitConverted;
}

function getResponse(item) {
  let unit = askUnit(item);
  prompt(`${MESSAGES[item]} (${unit})`);
  let response = readline.question();
  while (invalidNumber(response, item)) {
    prompt(MESSAGES["invalidResponse"]);
    prompt(`${MESSAGES[item]} (${unit})`);
    response = readline.question();
  }
  return convertResponse(Number(response), item, unit);
}

function invalidNumber(numberString, item) {
  if (isNaN(Number(numberString)) || (numberString === '')) {
    return true;
  } else if (item === "askPrincipal" && Number(numberString) < 0) {
    return true;
  } else if (item === "askAPR" && Number(numberString) < 0) {
    return true;
  } else if (item === "askLoanDuration" && Number(numberString) <= 0) {
    return true;
  } else {
    return false;
  }
}

function convertResponse(response, item, unit) {
  if (item === "askAPR") {
    if (unit === "%") {
      response /= 1200;
    } else {
      response /= 12;
    }
  } else if (unit === "years") {
    response *= 12;
  }
  return response;
}

function calcMonthlyPay(principal, APR, loanDuration) {
  if (APR === 0) return principal / loanDuration;
  return principal * (APR / (1 - Math.pow((1 + APR), (-loanDuration))));
}


function showPaymentAmount(MonthlyPay) {
  prompt(`${MESSAGES["paymentAffix"]} $${MonthlyPay.toFixed(2)}.`);
}

function askDoAgain() {
  let allowedEntries = ['y', 'n', 'yes', 'no'];
  prompt(MESSAGES["askDoAgain"]);
  let doAgain = readline.question().toLowerCase();
  while (!allowedEntries.includes(doAgain)) {
    prompt(MESSAGES["invalidRedo"]);
    doAgain = readline.question().toLowerCase();
  }
  console.clear();
  return doAgain[0] === "y";
}

function exitCalc() {
  prompt(MESSAGES["exit"]);
}

//
console.clear();
prompt("Welcome to the Mortgage Calculator");

do {
  let principal = getResponse("askPrincipal");
  if (principal === 0) {
    prompt(MESSAGES["noLoan"]);
  } else {
    let APR = getResponse("askAPR");
    let loanDuration = getResponse("askLoanDuration");
    let MonthlyPay = calcMonthlyPay(principal, APR, loanDuration);
    showPaymentAmount(MonthlyPay);
  }
} while (askDoAgain());
exitCalc();