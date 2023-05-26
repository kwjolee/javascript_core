/*
input : array of values
output : array containing every other value of input array including first one
*/

function oddities(inputArray) {
  return inputArray.filter((_, ind) => (ind + 1) % 2 !== 0);
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []