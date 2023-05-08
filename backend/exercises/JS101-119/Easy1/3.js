for (let num = 1; num <= 99; num += 1) {
  if (num % 2 === 0) console.log(num);
}

/*
a for loop is declared by:
declaring a variable num then initializing it with the number 1
conditioning the loop to run as long as `num` <= 99 evaluates to true, which in practical terms means the value of `num` is less than or equal to 99
the value of `num` is incremented by 1 after every iteration
the loop evaluates whether the remainder of dividing the value of `num` by 2 is strictly equal to zero. in plain terms, this is checking to see if `num` is an even number
if the above expression evaluates to true, then the value of `num` is displayed to the console by calling console.log with `num` as its argument
this loop runs through every number from 1 to 99, inclusive
*/