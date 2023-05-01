function stringToInteger(string) {
  let integer = 0;
  for (let ind = 0; ind < string.length; ind += 1) {
    integer += string[ind] * Math.pow(10, string.length - ind - 1);
  }
  return integer;
}

function stringToSignedInteger(string) {
  if (string[0] === "+") {
    return stringToInteger(string.slice(1));
  } else if (string[0] === '-') {
    return -1 * stringToInteger(string.slice(1));
  } else {
    return stringToInteger(string);
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true