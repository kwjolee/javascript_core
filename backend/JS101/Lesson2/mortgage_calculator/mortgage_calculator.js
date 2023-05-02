const readline = require('readline-sync');
const MESSAGES = require ('./messages.json');

function showPrompt(message) {
  console.log(`\n===> ${message}\n`);
}

function askUnit(action) {
  if (action === "askPrincipal") return "$";
  const allowedUnits = MESSAGES["allowedUnits"][action];
  showPrompt(MESSAGES["units"][action]);
  let unit = readline.question();
  while (!allowedUnits.includes(unit)) {
    showPrompt(MESSAGES["invalidGeneral"]);
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

function getResponse(action) {
  const unit = askUnit(action);
  showPrompt(`${MESSAGES[action]} (${unit})`);
  let response = readline.question();
  while (isInvalidNumber(response, action)) {
    showPrompt(MESSAGES["invalidResponse"]);
    showPrompt(`${MESSAGES[action]} (${unit})`);
    response = readline.question();
  }
  return convertResponse(Number(response), action, unit);
}

function isInvalidNumber(numberString, action) {
  if (isNaN(Number(numberString)) || (numberString === '')) {
    return true;
  } else if (action === "askPrincipal" && Number(numberString) < 0) {
    return true;
  } else if (action === "askAPR" && Number(numberString) < 0) {
    return true;
  } else if (action === "askLoanDuration" && Number(numberString) <= 0) {
    return true;
  } else {
    return false;
  }
}

function convertResponse(response, action, unit) {
  if (action === "askAPR") {
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
  showPrompt(`${MESSAGES["paymentAffix"]} $${MonthlyPay.toFixed(2)}.`);
}

function askDoAgain() {
  const allowedEntries = ['y', 'n', 'yes', 'no'];
  showPrompt(MESSAGES["askDoAgain"]);
  let doAgain = readline.question().toLowerCase();
  while (!allowedEntries.includes(doAgain)) {
    showPrompt(MESSAGES["invalidRedo"]);
    doAgain = readline.question().toLowerCase();
  }
  console.clear();
  return doAgain[0] === "y";
}

function sayBye() {
  showPrompt(MESSAGES["exit"]);
}

//
console.clear();
showPrompt("Welcome to the Mortgage Calculator");

do {
  const principal = getResponse("askPrincipal");
  if (principal === 0) {
    showPrompt(MESSAGES["noLoan"]);
  } else {
    const APR = getResponse("askAPR");
    const loanDuration = getResponse("askLoanDuration");
    const MonthlyPay = calcMonthlyPay(principal, APR, loanDuration);
    showPaymentAmount(MonthlyPay);
  }
} while (askDoAgain());
sayBye();