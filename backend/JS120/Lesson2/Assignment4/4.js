let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false

function assignProperty(object, property, value) {
  let prototype = object;
  do {
    prototype = Object.getPrototypeOf(prototype);
    if (Object.hasOwn(prototype, property)) {
      prototype[property] = value;
      break;
    }
  } while (prototype !== Object.prototype);
}