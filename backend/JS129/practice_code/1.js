// The method franchise.allMovies is supposed to return an array of movie names. Explain why this code doesn't work as intended and fix it.

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    }, this);
  },
};

console.log(franchise.allMovies());

/*
this code doesn't work because the execution context is lost in the callback function passed to `map`
the callback function is being invoked simply as an ordinary function. in that case, the value of `this` is the global object
since the global object does not have a property named `name`, accessing that property returns `undefined`
one way to fix the code the run as intended is to explicitly set the execution context of the callback function by taking advantage of the second argument passed to `map`
`map` will explicitly set the execution context of the callback function passed to it (first argument) with its second argument
*/