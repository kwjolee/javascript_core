function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

let a1 = ninja.__proto__;
let a2 = Ninja.prototype;
console.log(a1 === a2);

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

let ninja2 = new Ninja();

let a3 = ninja.__proto__;
let a4 = Ninja.prototype;
console.log(a3 === a4);
console.log(a1 === a3);
console.log(a2 === a4);

console.log(ninja2.swingSword());

/*
error

when ninja is declared, its __proto__ is pointing to the prototype property of Ninja
it is an empty object
Ninja's prototype object is replaced with a new object
ninja's __proto__ is still pointing to the initial empty object
that initial empty object does not have a swingSword property
any ninja object constructed after Ninja's prototype property is changed will be able to call swingSword
but not before
*/