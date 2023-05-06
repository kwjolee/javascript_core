/*
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);
*/

/*
last line outputs:
{ first: [1, 2] }
pass by reference and variable as pointers are in play here
object["first"] retrieves from the object `object`, the value associated with the key `first`
this is an array, which is an object
therefore the variable `numArray` assigned not a separate array [1, 2] but rather a pointer to it
this array is mutated in line 4. this mutation is reflected in the object `object`
when `object` is logged, it shows this mutation
*/