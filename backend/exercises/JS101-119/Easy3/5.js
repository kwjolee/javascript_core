function triangle(length) {
  let logged = 0 ;
  while (logged <= length) {
    console.log(`${" ".repeat(length - logged)}${"*".repeat(logged)}`);
    logged += 1;
  }
}

triangle(9);