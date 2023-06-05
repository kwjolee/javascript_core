/* 11 minutes

PROBLEM
=====
input : two objects
output : number

first input object has the recipe
  list of ingredients needed for one cake
second input object has the ingredient
  list of ingredients available

output number indicates how many cakes can be made

units are not listed

EXAMPLE
=====
flour 500
sugar 200
eggs 1
::
flour 1200
sugar 1200
eggs 5
milk 200
==> 2 // enough flour for 2 cakes but not 3. enough sugar for 6 cakes. enough eggs for 5 cakes. recipe does not need milk.

DATA STRUCTURE
=====
objects, arrays?

ALGORITHM
=====
declare function `cakes` with parameters `recipe`, `available`

declare variable `canMake` and init with empty array

iterate through every ingredient in the `recipe` :: object properties
  amount we need is the value in `recipe` for this property
  amount we have is the value in `available` for this property
  divide value in `available` by value in `recipe` to get max cakes count for this ingredient
    round down and add to `canMake`
  if ingredient in `recipe` does not exist in `available` then function returns `0`
end iteration

return the minimum element value of `canMake`
*/

function cakes(recipe, available) {
  let canMake = [];

  let ingredients = Object.keys(recipe);

  for (let ingredient of ingredients) {
    let need = recipe[ingredient];
    let have = available[ingredient];
    let cakes = Math.floor(have / need);
    if (isNaN(cakes)) return 0;
    canMake.push(cakes);
  }

  return Math.min(...canMake);
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})); 
console.log()
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})); 
