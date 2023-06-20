/*
the first loop uses the `for...in` loop, which will iterate through inherited properties, not just the object's own properties

`Object.keys` will only list the object's own properties

so if the ordinary object `foo` does not have any inherited properties, then the two loops will output the same
but if `foo` has inherited properties, then only the first loop will show that
*/

let foo = {a: 1, b: 2}; // has own property a, b

for (let property in foo) {
  console.log(`${property}: ${foo[property]}`); // shows a, b
}

Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`); // shows a, b
});

/*
the above code shows the same output
*/

let bar = {a: 1, b: 2};
foo = Object.create(bar); // inherits a, b
foo.c = 3; // has own property c

for (let property in foo) {
  console.log(`${property}: ${foo[property]}`); // shows a, b, c
}

Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`); // shows c
});

/*
the above code shows different outputs.
*/