/*
input:
1. length of room in meters
2. width of room in meters

output:
log area in both square meters and square feet

*/

const readline = require('readline-sync');
const SQM_TO_SQFT = 10.7639;

let length = Number(readline.question("Enter the length of th eroom in meters:\n"));
let width = Number(readline.question("Enter the width of th eroom in meters:\n"));

let areaMeters = length * width;
let areaFt = areaMeters * SQM_TO_SQFT;

console.log(`The area of the room is ${areaMeters.toFixed(2)} square meters (${areaFt.toFixed(2)} square feet).`);