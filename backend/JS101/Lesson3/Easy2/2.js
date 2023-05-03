let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];

//* different ways to make a copy of an array

numbers.concat([]).reverse();
numbers.slice().reverse();
let revNumber = [];
numbers.forEach(number => revNumber.unshift(number));
console.log(revNumber);