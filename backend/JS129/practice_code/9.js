// The Dog class has a method bark that is not working as intended. Fix the code to make it work.

class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log('Woof! My name is ' + this.name + '.');
  }
}

let dog = new Dog('Max');
dog.bark();
