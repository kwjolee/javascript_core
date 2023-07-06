function forEach(arr, callback, thisArg) {
  for (let ind = 0; ind < arr.length; ind += 1) {
    let element = arr[ind];
    callback.call(thisArg, element, ind, arr);
  }
}

forEach(["a", "b", "c"], function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});