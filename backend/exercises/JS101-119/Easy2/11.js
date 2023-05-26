/*
input : non empty string
output : middle character of the input string
  if string length is even, then middle two characters
*/

function centerOf(string) {
  let char;
  if (string.length % 2 !== 0) {
    char = string[(string.length - 1) / 2];
  } else {
    char = string.slice((string.length / 2) - 1, (string.length / 2) + 1);
  }
  console.log(char);
  return char;
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"