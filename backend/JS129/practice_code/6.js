// The add method of the Calculator object is not working as intended. Fix the code to make it work.

let Calculator = {
  value: 0,
  add: function(num) {
    return this.value + num;
  }
};

console.log(Calculator.add(5));

/*
intention unclear
*/