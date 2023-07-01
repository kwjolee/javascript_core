const walkMixin = {
  walk() {
    return "Let's go for a walk!";
  }
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}

Object.assign(Cat.prototype, walkMixin);

let a = {};
Object.assign(a, walkMixin);

let kitty = new Cat("Sophie");
// console.log(kitty.greet());
// console.log(kitty.walk());
console.log(a.__proto__);