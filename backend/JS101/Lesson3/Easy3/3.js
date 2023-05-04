let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

/*
reassignments are not exactly pass-by-value or pass-by-reference but they behave analogously.
for primitive values, they are pass-by-value
this means in line 2, str2 is set to the value of str1
when str2 is reassigned, it si set to the value of a new string
in this process, str1 is never altered
this prints "hello there" to the console.
*/
