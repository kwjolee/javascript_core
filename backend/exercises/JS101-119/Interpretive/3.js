// eslint-disable-next-line max-lines-per-function
function isBlockWord(string) {
  const mismatches = {
    b: 'o',
    x: 'k',
    d: 'q',
    c: 'p',
    n: 'a',
    g: 't',
    r: 'e',
    f: 's',
    j: 'w',
    h: 'u',
    v: 'i',
    l: 'y',
    z: 'm',
    o: 'b',
    k: 'x',
    q: 'd',
    p: 'c',
    a: 'n',
    t: 'g',
    e: 'r',
    s: 'f',
    w: 'j',
    u: 'h',
    i: 'v',
    y: 'l',
    m: 'z'
  };
  string = string.toLowerCase();
  for (let letter of string) {
    if (string.includes(mismatches[letter])) return false;
    if (string.split("").filter(val => val === letter).length > 1) return false;
  }
  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false