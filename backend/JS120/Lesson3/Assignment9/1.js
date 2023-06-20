let RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area();
  this.perimeter = RECTANGLE.perimeter();
}

let rect1 = new Rectangle(2, 3);

console.log(rect1.area);
console.log(rect1.perimeter);

/*
when RECTANGLE.area() is invoked, the area method of RECTANGLE object is being called
within the area function, the this keyword is used
in the invocation context, this is the RECTANGLE object
that object does not have width or height properties
so referencing those properties will return undefined
undefined * undefined I think returns NaN
so both lines 19 and 20 log NaN
*/