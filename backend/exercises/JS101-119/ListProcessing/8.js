function buyFruit(groclist) {
  return groclist.reduce(function (acc, subarr) {
    acc.push(`${subarr[0]} `.repeat(subarr[1]).split(" ").slice(0, -1));
    return acc;
  },[]).flat();
}
console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));