class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  calculateArea() {
    return this.length * this.width; // Added 'this' keyword
  }
}

let rectangle = new Rectangle(5, 3);
console.log(rectangle.calculateArea());
