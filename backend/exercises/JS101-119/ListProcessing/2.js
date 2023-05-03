const TEMPLATE = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

function alphabeticNumberSort(array) {
  let alphaArray = array.map(val => TEMPLATE[val]);
  let alphaArraySort = alphaArray.sort((a, b) => {
    return a < b ? -1 : 1;
  });
  let numberArray = alphaArraySort.map(val => TEMPLATE.indexOf(val));
  return numberArray;
}

alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);