/*
1.
[1, 2, 3]
The callback function returns `'hi'` for every element iteration, which evaluates to `true`

2.
[undefined, undefined, undefined]
The callback function does not return anything, which defaults to `undefined`

3.
[1, 4, 9]
When an arrow function is used in a single line, the return value is implicit in that a return statement does not need to be used.
the expression to the right of the arrow will evaluate and that value will return

4.
11
calling pop on an array returns the removed element, which in this case is `'caterpillar`
then the length property of that string is called

5.
callback's return value is what `num = num * 2` evaluates to
an assignment evaluates to the value that is being assigned
so callback's return value is each element multiplied by 2
`every` will return `true` since all those values are truthy

6.
[1, 1, 1, 1, 1]

7.
[undefined, 'bear']
the callback function returns the element if the length of the element is greater than 3
since there is no else block, by default `undefined` will return if the length of the element is not greater than 3

8.
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let obj = {};
Object.entries(flintstones).forEach(subArr => obj[subArr[1]] = Number(subArr[0]));
console.log(obj);

9.
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let sum = Object.values(ages).reduce((acc, val) => acc + val,0);
console.log(sum);

10.
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let minAge = Math.min(...Object.values(ages));
console.log(minAge);

11.
let statement = "The Flintstones Rock";

let obj = {};

for (let char of statement.split(" ").join("")) {
  obj[char] = obj[char] + 1 || 1;
}

console.log(obj);


*/

