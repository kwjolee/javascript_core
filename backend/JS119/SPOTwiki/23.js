// 7 minutes no PEDAC slow solution

function longest(str) {
  let substrings = getSubstrings(str);
  let length = -Infinity;
  let substring;

  for (let word of substrings) {
    if (word.length > length) {
      substring = word;
      length = word.length;
    }
  }

  return substring;

}

function getSubstrings(str) {
  let out = [];

  for (let ind1 = 0; ind1 < str.length; ind1 += 1) {
    for (let ind2 = ind1 + 1; ind2 < str.length + 1; ind2 += 1) {
      let substr = str.slice(ind1, ind2);
      if (isAlpha(substr)) {
        out.push(substr);
      }
    }
  }
  return out;
}

function isAlpha(str) {
  let prev = -Infinity;
  for (let letter of str) {
    if (letter.charCodeAt() >= prev) {
      prev = letter.charCodeAt();
    } else {
      return false;
    }
  }
  return true;
}