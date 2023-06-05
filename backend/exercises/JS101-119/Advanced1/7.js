function binarySearch(array, searchItem) {
  let workingArr = array.slice();
  let indOffset = 0;

  do {
    let midInd = Math.floor((workingArr.length - 1) / 2);
    if (workingArr[midInd] === searchItem) {
      return indOffset + midInd;
    } else if (workingArr[midInd] > searchItem) {
      workingArr = workingArr.slice(0, midInd);
      indOffset = 0;
    } else {
      workingArr = workingArr.slice(midInd + 1);
      indOffset += midInd + 1;
    }
  } while (workingArr.length > 0);

  return -1;
}

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];

console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6