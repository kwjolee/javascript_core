// eslint-disable-next-line max-lines-per-function
function merge(arr1, arr2) {
  let outArr = [];
  let remainder = [];

  arr1 = arr1.slice();
  arr2 = arr2.slice();

  while (arr1.length > 0 && arr2.length > 0) {
    let val1 = arr1[0];
    let val2 = arr2[0];

    if (val1 < val2) {
      outArr.push(arr1.shift());
    } else {
      outArr.push(arr2.shift());
    }

    if (arr1.length === 0) {
      remainder = arr2;
    } else if (arr2.length === 0) {
      remainder = arr1;
    }
  }

  return outArr.concat(remainder);
}

let a = ['Sue'];
let b = ['Bonnie'];
console.log(merge(a, b));
console.log(a);
console.log(b);