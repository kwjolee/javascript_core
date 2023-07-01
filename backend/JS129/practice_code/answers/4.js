function Animal(name) {
  this.name = name;
}

Animal.prototype.getName = function() {
  return this.name;
};

class Cat extends Animal {
  constructor(name) {
    super(name); // Call super with the argument
  }
}

let myCat = new Cat('Fluffy');
console.log(myCat.getName());
