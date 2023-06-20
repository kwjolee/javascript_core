let qux = { foo: 1 };
let baz = Object.create(qux);
baz.foo = 2;

console.log(baz.foo + qux.foo);

/*
`qux` has an own property `foo` which has a value of 1
`baz` is created using the `Object.create` method, using `qux` as its prototype
then, `baz` has its own property `foo` created with a value of 2
`baz.foo` has a value of 2, and `qux.foo` has a value of 1. `baz.foo` no longer refers to the value of `qux.foo` because `baz` has its own property `foo`
the sum is 3
*/