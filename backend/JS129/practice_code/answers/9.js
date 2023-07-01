class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log('Woof! My name is ' + this.name + '.'); // Added 'this' keyword
  }
}

let dog = new Dog('Max');
dog.bark();
