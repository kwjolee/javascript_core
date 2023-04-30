function cleanUp(string) {
  let outString = string.replace(/[^a-z]/gi," ");
  while (outString.indexOf('  ') !== -1) {
    outString = outString.replace("  "," ");
  }
  return outString;
}

cleanUp("---what's my +*& line?");    // " what s my line "