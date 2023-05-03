const readline = require('readline-sync');
const MESSAGES = require ('./messages.json');
const YEAR_TO_MONTH = 12;
const PER_TO_DEC = 0.01;

function showPrompt(message) {
  console.log(`\n===> ${message}\n`);
}

function askUnits(action) {
  if (action === "askPrincipal") return "$";
  const allowedUnits = MESSAGES["allowedUnits"][action];
  showPrompt(MESSAGES["askUnits"][action]);
  let unit = readline.question();
  while (!allowedUnits.includes(unit)) {
    showPrompt(MESSAGES["invalidUnits"]);
    showPrompt(MESSAGES["askUnits"][action]);
    unit = readline.question();
  }
  return convertUnits(unit);
}

function convertUnits(unit) {
  let unitConverted;
  if (unit[0].toLowerCase() === "p") {
    unitConverted = "%";
  } else if (unit[0].toLowerCase() === "d") {
    unitConverted = "";
  } else if (unit[0].toLowerCase() === "y") {
    unitConverted = "years";
  } else if (unit[0].toLowerCase() === "m") {
    unitConverted = "months";
  }
  return unitConverted;
}

function getLoanTerms(action) {
  const unit = askUnits(action);
  showPrompt(`${MESSAGES[action]} (${unit})`);
  let response = readline.question();
  while (isInvalidTerm(response, action)) {
    showPrompt(MESSAGES["invalidTerm"][action]);
    showPrompt(`${MESSAGES[action]} (${unit})`);
    response = readline.question();
  }
  return [Number(response), unit];
}

function isInvalidTerm(numberString, action) {
  let term = Number(numberString);
  if (isNaN(term) || (numberString === '')) {
    return true;
  } else if (action === "askPrincipal" && term < 0) {
    return true;
  } else if (action === "askAPR" && term < 0) {
    return true;
  } else if (action === "askLoanTime" && (term <= 0 || term % 1 > 0)) {
    return true;
  } else {
    return false;
  }
}

function convertLoanTerm(response, action, unit) {
  if (action === "askAPR") {
    if (unit === "%") {
      response /= (YEAR_TO_MONTH / PER_TO_DEC);
    } else {
      response /= YEAR_TO_MONTH;
    }
  } else if (unit === "years") {
    response *= YEAR_TO_MONTH;
  }
  return response;
}

function calcMonthlyPay(fullLoanTerms) {
  const principal = fullLoanTerms.principal;
  const APR = convertLoanTerm(fullLoanTerms.APR[0], "askAPR", fullLoanTerms.APR[1]);
  const loanTime = convertLoanTerm(fullLoanTerms.loanTime[0], "askLoanTime", fullLoanTerms.loanTime[1]);

  if (APR === 0) return principal / loanTime;
  return principal * (APR / (1 - Math.pow((1 + APR), (-loanTime))));
}


function showPaymentAmount(monthlyPay, fullLoanTerms) {
  console.clear();
  showPrompt("For your selected loan terms of:");
  showPrompt(`Loan amount   : $${fullLoanTerms.principal}`);
  showPrompt(`Interest rate : ${fullLoanTerms.APR[0]} ${fullLoanTerms.APR[1]}`);
  showPrompt(`Loan duration : ${fullLoanTerms.loanTime[0]} ${fullLoanTerms.loanTime[1]}`);
  showPrompt(`${MESSAGES["paymentAffix"]} $${monthlyPay.toFixed(2)}.`);
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
  showPrompt(MESSAGES["bye"]);
}

function sayHi() {
  showPrompt(MESSAGES["welcome"]);
}

//
console.clear();

sayHi();
do {
  const [principal] = getLoanTerms("askPrincipal");
  if (principal === 0) {
    showPrompt(MESSAGES["noLoan"]);
  } else {
    const [APR, unitAPR] = getLoanTerms("askAPR");
    const [loanTime, unitLoanTime] = getLoanTerms("askLoanTime");
    const fullLoanTerms = {
      principal: principal,
      APR: [APR, unitAPR],
      loanTime: [loanTime, unitLoanTime]
    };

    const monthlyPay = calcMonthlyPay(fullLoanTerms);
    showPaymentAmount(monthlyPay, fullLoanTerms);
  }
} while (askDoAgain());
sayBye();