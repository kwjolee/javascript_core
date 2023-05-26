let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;

console.log(a, b);

/*
a is initially 2
b is initially [5, 8]
arr is initially [2, b] which is [2, [5, 8]];
2 of arr is incremented by 2, so arr is now [4, b] but a is still 2
first element of b is decremented by a. first element of b is 5.
a is 2.
so b is now [3, 8]
*/