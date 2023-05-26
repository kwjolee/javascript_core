/*
input : any number
output : sum of all numbers between 1 and input number
  but sum only if the given number is a multiple of 3 or 5
*/

function multisum(number) {
  let allNumbers = [];
  let sum;
  for (let ind = 1; ind <= number; ind += 1) {
    allNumbers.push(ind);
  }
  let keepNumbers = allNumbers.filter(val => val % 3 === 0 || val % 5 === 0);
  sum = keepNumbers.reduce((acc, val) => acc + val, 0);
  return sum;
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168