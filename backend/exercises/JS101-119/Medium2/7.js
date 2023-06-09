function bubbleSort(arr) {
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let ind1 = 0; ind1 < arr.length - 1; ind1 += 1) {
      let ind2 = ind1 + 1;
      let val1 = arr[ind1];
      let val2 = arr[ind2];
      console.log({ind1, val1, val2})
      if (val1 > val2) {
        [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
        swapped = true;
      }
    }
  }

  return arr;
}

console.log(bubbleSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']))