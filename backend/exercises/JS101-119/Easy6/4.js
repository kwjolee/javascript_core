/*

*/

function sequence(number) {
  let outArr = [];
  let num = 1;
  while (num <= number) {
    outArr.push(num);
    num += 1;
  }
  console.log(outArr);
}

sequence(1);