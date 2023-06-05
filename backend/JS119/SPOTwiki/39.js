function greatestProduct(input) {
  let prod = 0;
  for (let ind = 0; ind < input.length - 4; ind += 1) {
    let subNum = input.slice(ind, ind + 5);
    let subNumArr = subNum.split("");
    let num = subNumArr.reduce((acc, val) => acc * val, 1);
    console.log(`${subNum} turns into ${num}`)
    if (num > prod) prod = num;
  }
  return prod;
}