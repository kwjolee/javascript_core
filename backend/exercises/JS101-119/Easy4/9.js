function stringToInteger(string) {
  let integer = 0;
  for (let ind = 0; ind < string.length; ind += 1) {
    integer += string[ind] * Math.pow(10, string.length - ind - 1);
  }
  return integer;
}

console.log(stringToInteger('570'));