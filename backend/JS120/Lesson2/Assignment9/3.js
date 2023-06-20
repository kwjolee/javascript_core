/*
`deliverMessage` is an ordinary function declared with a function declaration
when it is invoked, its `this` value is the global object
when `message` is reassigned on line 1, it does not have a let or const keyword
this acts as if we are referencing the `message` property of the global object
the global object does not have a `message` property by default
so a `message` property gets added to the global object and its value is set to the string
that string gets output on line 7

in the second bit of code, the `deliverMessage` property of the `foo` object is assigned the global `deliverMessage` function
this makes `deliverMessage` a method of the `foo` object
when that method is called, the context is the `foo` object
so the function scope string is output on line 15
*/

message = 'Hello from the global scope!';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage();

let foo = {
  message: 'Hello from the function scope!',
};

foo.deliverMessage = deliverMessage;

foo.deliverMessage();