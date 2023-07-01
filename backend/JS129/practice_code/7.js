// The Car class should have a static property called totalCars that keeps track of the number of cars. Fix the code to make it work.

class Car {
  static totalCars = 0;

  constructor(brand) {
    this.brand = brand;
    Car.totalCars++;
  }
}

let car1 = new Car('Toyota');
let car2 = new Car('Honda');
console.log(Car.totalCars);

/*
works fine
*/
