function sequence(count, start) {
  let out = [];
  let currNumber = 0;
  for (let ind = 1; ind <= count; ind += 1) {
    out.push(currNumber += start);
  }
  return out;
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []