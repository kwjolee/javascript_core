let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let arr2 = arr.map(obj => {
  let objCopy = Object.assign({}, obj);
  Object.keys(objCopy).forEach(keyName => {
    objCopy[keyName] += 1;
  });
  return objCopy;
});

console.log(arr);
console.log(arr2);