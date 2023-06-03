function featured(number) {
  const errormsg = "There is no possible number that fulfills those requirements.";
  const maxnum = 9876543201;

  if (number >= maxnum) return errormsg;
  let newNum = number;
  do {
    newNum += 1;
    if (newNum % 7 === 0 && newNum % 2 !== 0 && uniqNumbers(newNum)) return newNum;
  } while (newNum < maxnum);
  return errormsg;
}

function uniqNumbers(number) {
  let numStr = String(number);
  let numObj = {};
  for (let digit of numStr) {
    numObj[digit] = numObj[digit] + 1 || 1;
  }
  let occur = Object.values(numObj);
  if (occur.filter(val => val !== 1).length > 0) return false;
  return true;
}

console.log(featured(12) === 21);           // 21
console.log(featured(20) === 21);           // 21
console.log(featured(21) === 35);           // 35
console.log(featured(997) === 1029);          // 1029
console.log(featured(1029) === 1043);         // 1043
console.log(featured(999999) === 1023547);       // 1023547
console.log(featured(999999987) === 1023456987);    // 1023456987
console.log(featured(9876543186) === 9876543201);   // 9876543201
console.log(featured(9876543200) === 9876543201);   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."