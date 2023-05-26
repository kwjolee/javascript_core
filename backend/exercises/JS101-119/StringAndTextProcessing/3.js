function letterCaseCount(string) {
  let outObj = {lowercase: 0, uppercase: 0, neither: 0};
  for (let char of string.split("")) {
    if (char === char.toLowerCase() && char === char.toUpperCase()) {
      outObj.neither += 1;
    } else if (char === char.toLowerCase()) {
      outObj.lowercase += 1;
    } else {
      outObj.uppercase += 1;
    }
  }
  console.log(outObj);
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }