function letterCaseCount(string) {
  let obj = {lowercase: 0, uppercase: 0, neither: 0};
  string.split("").forEach(function (letter) {
    if (letter === letter.toLowerCase() && letter === letter.toUpperCase()) {
      obj.neither += 1;
    } else if (letter === letter.toLowerCase()) {
      obj.lowercase += 1;
    } else {
      obj.uppercase += 1;
    }
  });
  return obj;
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }