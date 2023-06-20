let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
    return this.firstName + ' ' + this.lastName + ' is a '
                                + this.occupation + '.';
  }
};

function logReturnVal(func) {
  let returnVal = func();
  console.log(returnVal);
}

logReturnVal(turk.getDescription);

/*
undefined undefined is a undefined.

this is because we extracted the the getDescription method out of the turk object as an ordinary function
when this gets invoked, its context is the global object
it is passed to the logReturnVal function as an argument, then invoked within that function
the context is still the global object
there is no firstName, lastName, or occupation property in the global object. those return undefined.
*/