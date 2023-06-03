function ranger(start, end) {
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  if (end === undefined) return ranger(0, start);

  return range;
}

// function range(end) {
//   return range(0, end);
// }

// Examples

console.log(ranger(10, 20));
console.log(ranger(5));