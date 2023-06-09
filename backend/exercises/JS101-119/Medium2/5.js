/*

PROBLEM
=====
input : number
output : number or string

output number is the next featured number from the input number
  featured number has digits occurring only once
    multiple of 7
      odd number

if there is no featured number, issue an error message

largest possible featured number is 9876543201

EXAMPLE
=====
12 => 21
20 => 21
21 => 35

DATA STRUCTURE
=====
object : keep track of how many times digits occur
arrays : the digits of a given number

ALGORITHM
=====
declare function `featured` with parameter `inputNum`

//repeat
increment `inputNum` by 1
  if greater than 9876543201
    return error message
  if number is an odd multiple of 7
    check if all digits occur only once :: helper
      if yes
        return the number
      if not
        increment `inputNum` by 1
  if not odd multiple of 7
    increment `inputNum` by 1
//

*/

function featured(inputNum) {
  inputNum += 1;
  while (inputNum <= 9876543201) {
    if (inputNum % 2 !== 0 && inputNum % 7 === 0 && digitsOnlyOnce(inputNum)) {
      return inputNum;
    } else {
      inputNum += 1;
    }
  }
  return "NO possible";
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."

/*
input number
output boolean indiciating if given number's digits occur only once
*/

function digitsOnlyOnce(number) {
  let numberArr = String(number).split("");
  let numberObj = {};

  for (let digit of numberArr) {
    numberObj[digit] = numberObj[digit] + 1 || 1;
    if (numberObj[digit] > 1) return false;
  }
  return true;
}

