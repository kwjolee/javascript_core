function sequence(number) {
  let out = [];
  for (let ind = 1; ind <= number; ind += 1) {
    out.push(ind);
  }
  return out;
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]