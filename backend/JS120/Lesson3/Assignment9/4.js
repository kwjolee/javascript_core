/*
true

Ninja's prototype is set after ninja is declared and initialized
ninja's __proto__ simply refers to Ninja's prototype property
so it doesn't matter that Ninja's prototype property is set later
when swingSword method is called, its `this` value is set to ninja object
ninja's swung property holds the value of true
*/