function utf16Value(string) {
  return string.split("").reduce((acc, char) => acc + +char.charCodeAt(),0);
}

const OMEGA = "\u03A9";
console.log(utf16Value(OMEGA + OMEGA + OMEGA));