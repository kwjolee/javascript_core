function crunch(string) {
  return string.split("").filter((char, idx, arr) => arr[idx - 1] !== char).join("");
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""