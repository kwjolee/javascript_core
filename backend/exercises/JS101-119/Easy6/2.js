function doubleConsonants(string) {
  const changeList = 'bcdfghjklmnpqrstvwxyz';
  return string.split("").map(letter => changeList.includes(letter.toLowerCase()) ? letter.repeat(2) : letter).join("");
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""