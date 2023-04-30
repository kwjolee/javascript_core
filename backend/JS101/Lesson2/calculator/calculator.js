console.clear();

// import dependencies
const readline = require('readline-sync');
const CALCMESSAGES = require ('./calculator_messages.json');

// ask user for language
const LANG = askLanguage();

// functions
// show user the message
function prompt(msg) {
  console.log(`=> ${msg}`);
}

// check if argument is a valid number
function invalidNumber(number) {
  return number.trim() === '' || isNaN(Number(number));
}

// ask user for name
function askName() {
  prompt(messages(LANG,"askName"));
  const USERNAME = readline.question(); // accept any string
  prompt(messages(LANG,"intro") + USERNAME + "!");
  return USERNAME;
}

// ask user for first number
function askFirstNumber() {
  prompt(messages(LANG,"askFirstNum"));
  let number1 = (readline.question());
  while (invalidNumber(number1)) {
    prompt(messages(LANG,"invalidNum"));
    number1 = readline.question();
  }

  return Number(number1);
}

// ask user for second number
function askSecondNumber() {
  prompt(messages(LANG,"askSecondNum"));
  let number2 = (readline.question());

  while (invalidNumber(number2)) {
    prompt(messages(LANG,"invalidNum"));
    number2 = readline.question();
  }

  return Number(number2);
}

// ask user for operation
function askOperation() {
  prompt(messages(LANG,"askOp"));
  prompt(messages(LANG,"opOptions"));

  let operation = readline.question();
  while (!['1', '2', '3', '4', ].includes(operation)) {
    prompt(messages(LANG,"invalidOp"));
    operation = readline.question();
  }

  return operation;
}

// ask user if another calculation is wanted
function askDoAgain() {
  prompt(messages(LANG,"askDoOver"));

  let doOver = readline.question();
  while (!['y', 'n'].includes(doOver)) {
    prompt(messages(LANG,"invalidDoOver"));
    doOver = readline.question();
  }
  console.clear();
  return doOver === 'y';
}

// do calculation
function calculate(number1, number2, operation) {
  let result;
  switch (operation) {
    case '1':
      result = number1 + number2;
      break;
    case '2':
      result = number1 - number2;
      break;
    case '3':
      result = number1 * number2;
      break;
    case '4':
      if (number2 === 0) prompt(messages(LANG,"divZero"));
      result = number1 / number2;
      break;
  }
  return result;
}

// ask user for preferred language code
function askLanguage() {
  for (let langCode in CALCMESSAGES) {
    prompt(messages(langCode,"askLang"));
  }

  let userLang = readline.question();
  while (!Object.keys(CALCMESSAGES).includes(userLang)) {
    for (let langCode in CALCMESSAGES) {
      prompt(messages(langCode,"invalidLang"));
    }
    userLang = readline.question();
  }

  return userLang;
}

// construct message to show user
function messages(language, message) {
  return `${CALCMESSAGES[language][message]}`;
}

// run Calculator

askName();
do {
  const number1 = askFirstNumber();
  const number2 = askSecondNumber();
  const operation = askOperation();

  const output = calculate(number1, number2, operation);

  prompt(`${messages(LANG,"result")} ${output}`);
} while (askDoAgain());

prompt(`${messages(LANG,"exit")}`);
