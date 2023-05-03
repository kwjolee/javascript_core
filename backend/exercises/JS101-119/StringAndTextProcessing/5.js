function swapCase(string) {
  return string
        .split("")
        .map(letter => (letter >= "a" && letter <= "z")
        ? String.fromCharCode(letter.charCodeAt() - 32)
        : ((letter >= "A" && letter <= "Z")
          ? String.fromCharCode(letter.charCodeAt() + 32)
          : letter))
        .join("");
}

console.log(swapCase('Tonight on XYZ-TV'));