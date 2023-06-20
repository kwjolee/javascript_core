/*
the `bind` method returns a new functions whose execution context is permanently bound to the object that was used as the argument for the `bind` method

so this code doesn't actually log anything
*/

let obj = {
  message: 'JavaScript',
};

function foo() {
  console.log(this.message);
}

foo.bind(obj);