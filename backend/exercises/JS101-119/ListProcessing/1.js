function sum(number) {
  let outNum = String(number).split("").map(val => Number(val)).reduce((acc, val) => acc + val, 0);
  console.log(outNum);
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45