/*
A) 
local variables being reassigned within a function has no effect on their global counterparts
thus the log will reference the global variables, which have not been changed by the function
log will be ["one"], ["two"], ["three"]

B)
this is similar to A), but inside the function the local variables are reassigned to new objects
due to variable shadowing, these reassignments do not affect the global variables
the logs will be ["one"], ["two"], ["three"]

C)
pass by reference is at play here again
the string method .splice is a mutating method
it accepts up to three arguments, which is the case here
the first argument indicates the index where to start removing elements
the second argument indicates how many elements to remove
the third argument indicates what to insert at the index position of the first argument
since variables were passed by reference, this mutation will apply to the global variables as well
the resulting logs will be ["two"], ["three"], ["one"]
*/

function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;

  console.log(`one is: ${one}`);
  console.log(`two is: ${two}`);
  console.log(`three is: ${three}`);
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);