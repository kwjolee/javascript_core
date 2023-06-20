function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,
    
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
}

let scissors = createProduct(0, 'scissors', 20, 15);

scissors.setPrice(15);
scissors.describe();
console.log('-----');
