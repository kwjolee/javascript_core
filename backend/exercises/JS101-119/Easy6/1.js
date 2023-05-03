function repeater(string) {
  return string.split("").map(letter => letter.repeat(2)).join("");
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""