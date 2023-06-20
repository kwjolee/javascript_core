let scissors = {
  id: 0,
  name: 'Scissors',
  stock: 8,
  price: 10,

  setPrice(newPrice) {
    if (newPrice >= 0) {
      this.price = newPrice;
    } else {
      console.log('Invalid price.');
    }
  },

  describe() {
    console.log(`=> Name: ${this.name}`);
    console.log(`=> ID: ${this.id}`);
    console.log(`=> Price: $${this.price}`);
    console.log(`=> Stock: ${this.stock}`);
  }
};

let drill = {
  id: 1,
  name: 'Cordless Drill',
  stock: 15,
  price: 45,

  setPrice(newPrice) {
    if (newPrice >= 0) {
      this.price = newPrice;
    } else {
      console.log('Invalid price.');
    }
  },

  describe() {
    console.log(`=> Name: ${this.name}`);
    console.log(`=> ID: ${this.id}`);
    console.log(`=> Price: $${this.price}`);
    console.log(`=> Stock: ${this.stock}`);
  }
};

scissors.setPrice(15);
scissors.describe();
console.log('-----');
drill.setPrice(200);
drill.describe();
