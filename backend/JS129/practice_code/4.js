// The following code aims to inherit from the Animal class to create a Cat class. Identify and fix the issue.

function Animal(name) {
  this.name = name;
}

Animal.prototype.getName = function() {
  return this.name;
};

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
}

let myCat = new Cat('Fluffy');
console.log(myCat.getName());

/*
the code works as intended without fixing, but it is better to directly call `super` with the `name` argument in this case.
*/