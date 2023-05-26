function buyFruit(array) {
  let outArr = [];
  for (let item of array) {
    let count = 0;
    while (count < item[1]) {
      outArr.push(item[0]);
      count += 1;
    }
  }
  console.log(outArr);
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);