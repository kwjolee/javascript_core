/* 7 minutes

PROBLEM
=====
input : number
output : number

rules:
output number is obtained by
  removing one digit from the input number
    we want the maximum possible number obtained by this method

input number is at least 10
numbers are integers

EXAMPLE
=====
152 => 52
1001 => 101

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `deleteDigit` with parameter `n`

declare variable `maxNum` and init with 0

iterate through every digit of `n`
  remove this digit from `n`
    if greater than `maxNum`
      reassign `maxNum` with this number
end iteration

return `maxNum`
*/

function deleteDigit(n) {
  let maxNum = 0;

  let nArr = String(n).split("");

  for (let ind = 0; ind < nArr.length; ind += 1) {
    let newNum = Number([nArr.slice(0, ind), nArr.slice(ind + 1)].flat().join(""));
    if (newNum > maxNum) maxNum = newNum;
  }
  return maxNum;
}

console.log(deleteDigit(1234));