let qux = { foo: 1 };
let baz = Object.create(qux);
qux.foo = 2;

console.log(baz.foo + qux.foo);

/*
qux has a property foo with value 1
baz is created using qux as its prototype. it does not have its own property foo so it looks in qux
qux then has its value of property foo changed to 2
baz.foo does not exist, so it looks in its prototype chain and gets 2 from qux
qux.foo is 2
sum is 4
*/