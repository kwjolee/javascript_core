function triangle(side) {
  for (let row = 1; row <= side; row += 1) {
    let out = ' '.repeat(side - row) + '*'.repeat(row);
    console.log(out);
  }
}

// triangle(5);
triangle(9);