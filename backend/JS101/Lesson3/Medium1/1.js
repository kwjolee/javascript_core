const string = "The Flintstones Rock!";

let printed = 0;

while (printed !== 10) {
  console.log(string.padStart(string.length + printed, " "));
  printed += 1;
}

for (let pad = 0; pad < 10; pad += 1) {
  console.log(" ".repeat(pad) + string);
}