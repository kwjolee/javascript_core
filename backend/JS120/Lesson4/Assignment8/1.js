class Car {
  goSlow() {
    console.log(`I'm safe and driving slow.`);
  }
}

console.log(Car.constructor.name);

class Truck {
  goVerySlow() {
    console.log(`I'm a heavy truck and like going very slow.`);
  }
}

const car = new Car();
const truck = new Truck();

const Speed = {
  goFast() {
    console.log(this === truck);
    console.log(`I'm a ${this.constructor.name} and going super fast!`);
  }
};

Object.assign(Car.prototype, Speed);
Object.assign(Truck.prototype, Speed);

car.goFast();
truck.goFast();

console.log(Truck.constructor.name);