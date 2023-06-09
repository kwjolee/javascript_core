// 1 minute no PEDAC

function groupAndCount(arr) {
  let obj = {};
  for (let val of arr) {
    obj[val] = obj[val] + 1 || 1;
  }
  return obj;
}

console.log(groupAndCount([1, 1, 2, 2, 2, 3]));