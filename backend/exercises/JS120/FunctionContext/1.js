/*
person.fullName is not an invocation of a method
i'm not sure what `this` is in a non-method context
i have a feeling it's the global object
so undefinedundefined?
-> actually, NaN
undefined is not a string
when two non string items are added, they are coerced to numbers
*/

let person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);