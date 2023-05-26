function joinOr(arr, delim = ", ", word = "or") {
  switch (arr.length) {
    case 0:
      return "";
    case 1:
      return arr.join();
    case 2:
      return arr.join(` ${word} `);
    default: {
      let frontStr = arr.slice(0, arr.length - 1).join(delim);
      return frontStr + delim + word + " " + arr[arr.length - 1];
    }
  }
}

let arr = [1, 2, 3];
// joinOr(arr);
console.log(joinOr(arr, "; ", "and"));