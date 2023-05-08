function cleanUp(string) {
  string = string.replace(/[^a-z]/gi, " ");
  while (string.match(/  /gi) !== null) {
    string = string.replace("  ", " ");
  }
  console.log(string);
}

cleanUp("---what's my +*& line?");    // " what s my line "