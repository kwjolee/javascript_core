// The following code is intended to create a new instance of the Car class and log its brand. Identify and fix the issue.

function Car(brand) {
  this.brand = brand;
}

Car.prototype.logBrand = function() {
  console.log(this.brand);
};

let myCar = new Car('Tesla');
myCar.logBrand();

/*
the Car constructor was called without using the `new` keyword
*/