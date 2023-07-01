const swimMixin = {
  swim() {
    return `${this.name} is swimming.`;
  }
};

class Fish {
  constructor(name) {
    this.name = name;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Maltese extends Dog {}

let dog1 = new Maltese("Buddy");
let fish1 = new Fish("Nemo");

Object.assign(Fish.prototype, swimMixin);
Object.assign(Maltese.prototype, swimMixin);

console.log(dog1.swim());
console.log(fish1.swim());