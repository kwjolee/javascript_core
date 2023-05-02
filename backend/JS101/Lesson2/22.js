function changeNumber() {
  number = 200;
}

function someFunction() {
  let number = 100;
  changeNumber();
  console.log(number);
}

someFunction();

console.log(number);