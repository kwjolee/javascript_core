const PetPrototype = {
  sleep: function() {
    console.log("I am sleeping");
  },
  wake: function() {
    console.log("I am awake");
  },
  init: function(animal, name) {
    this.animal = animal;
    this.name = name;
    return this;
  }
};

let first = Object.create(PetPrototype);
console.log({first});
let pudding = first.init("Cat", "Pudding");
console.log({pudding});
console.log(first === pudding);