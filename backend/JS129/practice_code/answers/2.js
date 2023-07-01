function Car(brand) {
  this.brand = brand;
}

Car.prototype.logBrand = function() {
  console.log(this.brand);
};

let myCar = new Car('Tesla');
myCar.logBrand();
