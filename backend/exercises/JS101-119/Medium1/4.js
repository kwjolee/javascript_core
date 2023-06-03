/* 20 minutes

PROBLEM
=====
input : string
  list of operations and tokens
output : no return value

rules:
follow the list of commands provided

initial stack is []
initial register is 0

EXAMPLE
=====
minilang('PRINT');
// initial register is 0 and that is printed

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5 is placed in the register
// 5 is printed
// register is pushed to the stack. stack is now [5]
// 3 is placed in the register
// 3 is printed
// 5 is popped from the stack. stack is now []. popped valued 5 is added to the register which was 3, so it is now 8
// 8 is printed

ALGORITHM
declare funtion `minilang` with one parameter
declare variable `stack` and init with []
declare variable register and init with 0
declare variable `commands` and init with the parameter split into an array of words, separated by a space

iterate through commands
  perform action based on command
end iteration
*/

// eslint-disable-next-line max-lines-per-function
function minilang(string) {
  let stack = [];
  let register = 0;
  let commands = string.split(" ");

  for (let command of commands) {
    if (!isNaN(command)) {
      register = Number(command);
      continue;
    }
    switch (command) {
      case "PUSH":
        stack.push(register);
        break;
      case "ADD":
        register += stack.pop();
        break;
      case "SUB":
        register -= stack.pop();
        break;
      case "MULT":
        register *= stack.pop();
        break;
      case "DIV":
        register = parseInt(register / stack.pop(), 10);
        break;
      case "REMAINDER":
        register = parseInt(register % stack.pop(), 10);
        break;
      case "POP":
        register = stack.pop();
        break;
      case "PRINT":
        console.log(register);
        break;
    }
  }
}

// minilang('PRINT');
// 0

// minilang('5 PUSH 3 MULT PRINT');
// 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

// minilang('5 PUSH POP PRINT');
// 5

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

// minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)