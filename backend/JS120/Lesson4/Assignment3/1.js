function createPet(animal, name) {
  return {
    animal,
    name,
    sleep: function() {
      console.log("I am sleeping");
    },
    wake: function() {
      console.log("I am awake");
    }
  };
}


let pudding = createPet("Cat", "Pudding");

console.log({pudding});