// iterate through every character of string
// if current string is the same as the last string added to output, skip
// if current string is not the same as the last string added, add
// output

function crunch(string) {
  let out = '';

  for (let ind = 0; ind < string.length; ind += 1) {
    if (out[out.length - 1] !== string[ind]) out += string[ind];
  }

  console.log(out);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""