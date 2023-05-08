const readline = require('readline-sync');
const SQM_TO_SQFT = 10.7639;

let roomLength = +readline.question("Enter the length of the room in meters:\n");
let roomWidth = +readline.question("Enter the width of the room in meters:\n");

let roomArea = roomLength * roomWidth;

console.log(`The area of the room is ${roomArea.toFixed(2)} square meters (${(roomArea * SQM_TO_SQFT).toFixed(2)} square feet).`);

/*
this program uses the readline-sync module to receive a text input from the user through the console
the const SQM_TO_SQFT is declared and assigned the number 10.7639. This is the conversion factor from square meters to square feet
there are two pieces of information needed: the length of the room and the width of the room. two different input requests are made for this
first, the question method is called on the readline module, with the prompt asking the user to enter the length of the room in meters
this return value from this is the user's input in string type. the variable roomLength is declared and initialized with this value.
likewise, the variable roomWidth is declared and initialized with the return value of the question method when it asks the user to enter the width of the room in meters
these values are strings, and we need to multiply the two numerically to calculate the area of the room
this is done by explicitly coercing both values to a number using the unary + operator.
then, template literals are used to output the answer sentence. 
*/
