const readline = require('readline-sync');

let username = readline.question("What is your name? ");
if (username[username.length - 1] === "!") {
  console.log(`HELLO ${username.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${username}.`);
}