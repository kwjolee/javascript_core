let munstersDescription = "The Munsters are creepy and spooky.";

let caseFlipped = munstersDescription
  .split("")
  .map(letter => {
    if (letter === letter.toLowerCase()) {
      return letter.toUpperCase();
    } else {
      return letter.toLowerCase();
    }
  })
  .join("");

console.log(caseFlipped);