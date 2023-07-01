// The info method of the object obj2 is supposed to log the name and age of the pet. However, it currently throws an error when called. Identify the problem in the code and fix it so that it works as intended.

const obj1 = {
  name: 'fluffy',
  age: 2,
};

const obj2 = {
  pet: obj1,
  info() {
    console.log(`${this.pet.name} is ${this.pet.age} years old`);
  },
};

obj2.info();
