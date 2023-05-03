console.log(false == '0');
console.log(false === '0');

/*
true, then false

in the first line, a boolean is loosely compared to something that is not a boolean, in this case, the boolean is converted to a number.
now a number is being loosely comapred to a string. in this case, the string is converted to a number.
`false` converts to the number 0. string '0' converts to the number 0.
these are `==` so it returns true.

in the second line, false and '0' do not have the same type since one is a boolean and the other is a string. this returns false.

*/