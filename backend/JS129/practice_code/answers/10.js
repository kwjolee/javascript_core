const obj1 = {
  name: 'fluffy',
  age: 2,
};

const obj2 = {
  pet: obj1,
  info: () => {
    console.log(`${this.pet.name} is ${this.pet.age} years old`);
  },
};

obj2.info();
