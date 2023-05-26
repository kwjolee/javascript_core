let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let arr2 = arr.map(subArr => subArr.filter(val => val % 3 === 0));

console.log(arr);
console.log(arr2);