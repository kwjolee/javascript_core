function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let ind = 0; ind < arr.length - 1; ind += 1) {
      if (arr[ind] > arr[ind + 1]) {
        [arr[ind], arr[ind + 1]] = [arr[ind + 1], arr[ind]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

// let array1 = [5, 3];
// bubbleSort(array1);
// console.log(array1);    // [3, 5]

// let array2 = [6, 2, 7, 1, 4];
// bubbleSort(array2);
// console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]