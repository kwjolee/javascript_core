let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
// arr2[0].first = 42;
arr2[2] = 42;
console.log(arr1);

/*
this creates a shallow copy
nested arrays are still pointing to the same object in memory
this prints the altered arr1 where first: 42
*/

// arr1 = [1, 2, 3];
// arr2 = arr1
// arr2[2] = 5;
// console.log(arr1);
// console.log(arr2);