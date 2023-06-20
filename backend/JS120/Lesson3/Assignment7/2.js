/*
lizzy has a value of undefined because Lizard does not have an explicit return
code is trying to call a nonexistent method of lizzy
it will either return undefined or throw an error... type error?
*/

function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = Lizard();
lizzy.scamper(); // ?