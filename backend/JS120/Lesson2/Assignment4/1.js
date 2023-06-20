let qux = { foo: 1 };
let baz = Object.create(qux);
qux.foo = 5;
console.log(baz.foo + qux.foo);

/*
`qux` refers to an object that was created using an object literal, which has its own property `foo` with a value of 1
`baz` refers to an object that was created using the `Object.create` method using `qux` as its prototype
Although `foo` is not an own property of `baz`, it is still able to access the value of that property by searching through its prototype chain
The value of `foo` that `baz` access is the value of `foo` that is the own property of `qux`
so `baz.foo` returns 1, and `qux.foo` returns 1, and adding the two returns 2`
*/