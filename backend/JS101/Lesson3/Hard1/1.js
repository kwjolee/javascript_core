/*

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

*/

/*
these will not return the same results.
the return line in the second code does not have an expression to the right.
the return line does not know that the object that follows it is what is meant to be returned
the first function will return the defined object
the second function will return undefined, since no return expression was defined
*/