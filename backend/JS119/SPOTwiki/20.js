// 6 minutes no PEDAC but object is not really "sorted"

function getCharCount(string) {
  let obj = {};

  for (let char of string) {
    if (char.toLowerCase() === char.toUpperCase()) continue;
    char = char.toLowerCase();
    obj[char] = obj[char] + 1 || 1;
  }

  let obj2 = {};
  for (let keyValArr of Object.entries(obj)) {
    let key = keyValArr[0];
    let val = keyValArr[1];
    if (obj2.hasOwnProperty(String(val))) {
      obj2[val].push(key);
    } else {
      obj2[val] = [key];
    }
  }
  return obj2;
}

console.log(getCharCount("Mississippi"));