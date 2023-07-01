// The getFullName method of the Person class should return the person's full name. Identify and fix the issue in the code.

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getFullName = function() {
  return this.firstName + ' ' + this.lastName;
};

let john = new Person('John', 'Doe');
console.log(john.getFullName());
