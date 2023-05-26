const readline = require('readline-sync');

let nums = [];

while (nums.length !== 6) {
  let num = Number(readline.question("Enter the number: "));
  nums.push(num);
}

if (nums.slice(0,5).includes(nums[5])) {
  console.log(`The number ${nums[5]} appears in ${String(nums.slice(0,5))}.`);
} else {
  console.log(`The number ${nums[5]} does not appear in ${String(nums.slice(0,5))}.`);
}