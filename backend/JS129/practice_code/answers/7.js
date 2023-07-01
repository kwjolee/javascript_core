class Car {
  static totalCars = 0; // Move outside the constructor

  constructor(brand) {
    this.brand = brand;
    Car.totalCars++;
  }
}

let car1 = new Car('Toyota');
let car2 = new Car('Honda');
console.log(Car.totalCars);
