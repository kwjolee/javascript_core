function staggeredCase(string) {
  let makeUpper = true;
  return string
  .split("")
  .map(letter => {
    let isLetter = letter.match(/[a-z]/gi);
    if (isLetter && makeUpper) {
      makeUpper = false;
      return letter.toUpperCase();
    } else if (isLetter && !makeUpper) {
      makeUpper = true;
      return letter.toLowerCase();
    } else {
      return letter;
    }
  })
  .join("");
}


console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);