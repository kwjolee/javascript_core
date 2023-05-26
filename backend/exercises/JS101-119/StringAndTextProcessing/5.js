function swapCase(string) {
  let outStr = "";
  for (let char of string.split("")) {
    if (char === char.toLowerCase()) {
      outStr += char.toUpperCase();
    } else {
      outStr += char.toLowerCase();
    }
  }
  console.log(outStr);
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"