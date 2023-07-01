function objectsEqual(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  let longerKey;
  if (keys1.length > keys2.length) {
    longerKey = keys1;
  } else {
    longerKey = keys2;
  }

  for (let ind = 1; ind < longerKey.length; ind += 1) {
    let key1 = keys1[ind];
    let key2 = keys2[ind];
    if (key1 !== key2) return false;
    let val1 = obj1[key1];
    let val2 = obj2[key2];
    if (val1 !== val2) return false;
  }
  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false