function twice(number) {
  if (isDouble(number)) {
    return number;
  } else {
    return number * 2;
  }
}

function isDouble(number) {
  let numberString = String(number);
  if (numberString.length % 2 !== 0) return false;
  let halfLength = numberString.length / 2;
  if (numberString.slice(0, halfLength) === numberString.slice(halfLength)) return true;
  return false;
}

console.log(twice(44));