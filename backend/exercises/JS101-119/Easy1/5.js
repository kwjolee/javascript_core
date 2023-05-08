const readline = require('readline-sync');

let bill = +readline.question("What is the bill? ");
let tipPerc = +readline.question("what is the tip percentage? ");

let tipAmount = bill * (tipPerc / 100);
let total = bill + tipAmount;

console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);

/*
readline-sync library is used to receive inputs from the user through the console. the inputs are returns by readline-sync in string type.
first the bill amount is requested, then explicitly coerced to number type using the unary + operator being being assigned to the declared variable bill
likewise, the tip percentage is requested, explicitly coerced to number type, then assigned to the declared variable tipPerc
variable tipAmount is declared after both inputs are received. the bill amount is multiplied by the decimal form of the tip percentage, and the return value is assigned to tipAmount
variable total is declared, and initialized with the sum of the bill amount and the tip amount, which is the return value of using the binary operator + on these variables
the tip amount and total bill amount are then logged to the console using template literals. we use string interpolation here to round the amounts to two decimal places by calling the toFixed method on the amounts. the argument passed to the method dictates how many decimal places to round to.
*/
