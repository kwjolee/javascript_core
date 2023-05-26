const readline = require('readline-sync');

const NOUN = readline.question("Enter a noun: ");
const VERB = readline.question("Enter a verb: ");
const ADJECTIVE = readline.question("Enter an adjective: ");
const ADVERB = readline.question("Enter a adverb: ");

console.log(`Do you walk your ${ADJECTIVE} ${NOUN} ${ADVERB}? That's hilarious!`);
console.log(`The ${ADJECTIVE} ${NOUN} ${VERB}s ${ADVERB} over the lazy ${NOUN}.`);
console.log(`The ${NOUN} ${ADVERB} ${VERB}s up ${ADJECTIVE} Joe's turtle.`);