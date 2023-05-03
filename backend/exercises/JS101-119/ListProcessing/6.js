function leadingSubstrings(string) {
  let strings = [];
  string.split("").reduce((acc, letter) => {
    acc += letter;
    strings.push(acc);
    return acc;
  },"");
  return strings;
}

function substrings(string) {
  let allSubstrings = [];
  for (let ind = 0; ind < string.length; ind += 1) {
    allSubstrings.push(leadingSubstrings(string.slice(ind)));
  }
  return allSubstrings.flat();
}

function isPalindrome(string) {
  if (string.length === 1) return false;
  while (string.length > 1) {
    let front = string[0];
    let end = string[string.length - 1];
    if (front !== end) return false;
    string = string.slice(1,-1);
  }
  return true;
}

function palindromes(string) {
  let allPalindromes = [];
  let allSubstrings = substrings(string);
  for (let substr of allSubstrings) {
    if (isPalindrome(substr)) allPalindromes.push(substr);
  }
  return allPalindromes;
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]