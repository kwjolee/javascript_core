function staggeredCase(string) {
  let outStr = "";
  let makeCap = true;
  for (let char of string.split("")) {
    if (makeCap) {
      outStr += char.toUpperCase();
      makeCap = false;
    } else {
      outStr += char.toLowerCase();
      makeCap = true;
    }
  }
  console.log(outStr);
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"