let Calculator = {
  value: 0,
  add: function(num) {
    this.value += num; // Update 'this.value'
    return this.value;
  }
};

console.log(Calculator.add(5));
