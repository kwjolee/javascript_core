function swapName(nameFirstLast) {
  let nameSplit = nameFirstLast.split(" ");
  nameSplit.unshift(nameSplit.pop());
  return nameSplit.map(function (val, idx) {
    return idx === 0 ? val + ',' : val;
  }).join(" ");
}

swapName('Karl Oskar Henriksson Ragvals');    // "Ragvals, Karl Oskar Henriksson"
