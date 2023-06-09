
function rotateRightmostDigits(baseNum, rotDigits) {
  if (rotDigits <= 0) return baseNum;
  if (rotDigits > String(baseNum).length) return null;

  let baseDigits = String(baseNum).split("");

  let toRotate = baseDigits.slice(-rotDigits);
  let notRotate = baseDigits.slice(0, baseDigits.length - rotDigits);

  toRotate.push(toRotate.shift());

  let rotated = notRotate.concat(toRotate);
  let rotatedNum = Number(rotated.join(""));

  return rotatedNum;
}

function maxRotation(number) {
  let rotDigit = String(number).length;

  while (rotDigit > 1) {
    number = rotateRightmostDigits(number, rotDigit);
    rotDigit -= 1;
    // console.log({number});
  }
  return number;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845