function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getFullName = function() {
  return this.firstName + ' ' + this.lastName;
};

let john = new Person('John', 'Doe'); // Added 'new' keyword
console.log(john.getFullName());
