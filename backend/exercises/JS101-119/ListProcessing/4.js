function leadingSubstrings(string) {
  let strings = [];
  string.split("").reduce((acc, letter) => {
    acc += letter;
    strings.push(acc);
    return acc;
  },"");
  return strings;
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]