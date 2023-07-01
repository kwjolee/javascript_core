// The calculateArea method of the Rectangle class should return the area of the rectangle. Fix the code to make it work.

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  calculateArea() {
    return this.length * this.width;
  }
}

let rectangle = new Rectangle(5, 3);
console.log(rectangle.calculateArea());
