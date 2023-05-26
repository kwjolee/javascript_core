function staggeredCase(string) {
  let outStr = "";
  let makeCap = true;
  for (let char of string.split("")) {
    if (!isAlpha(char)) {
      outStr += char;
      continue;
    }
    if (makeCap) {
      outStr += char.toUpperCase();
      makeCap = false;
    } else {
      outStr += char.toLowerCase();
      makeCap = true;
    }
  }
  return outStr;
}

function isAlpha(string) {
  return "abcdefghijklmnopqrstuvwxyz".includes(string.toLowerCase());
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);