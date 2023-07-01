/*
`this` on line 5 is the global object

one fix is to use arrow function

another fix is to capture `this` before the callback
*/

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    let that = this;
    return [1, 2, 3].map(function(number) {
      return that.name + ' ' + number;
    });
  },
};

console.log(franchise.allMovies());