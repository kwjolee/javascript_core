const readline = require('readline-sync');

const noun = readline.question("Enter a noun: ");
const verb = readline.question("Enter a verb: ");
const adjective = readline.question("Enter an adjective: ");
const adverb = readline.question("Enter an adverb: ");

console.log(`Do you ${verb} your ${adjective} ${noun} quickly? That's hilarious!`);
console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.`);
console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);