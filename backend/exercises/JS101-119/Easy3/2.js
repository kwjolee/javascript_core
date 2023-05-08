function logInBox(string) {
  let edge = `+-${"-".repeat(string.length)}-+`;
  let fill = `| ${" ".repeat(string.length)} |`;
  console.log(edge);
  console.log(fill);
  console.log(`| ${string} |`);
  console.log(fill);
  console.log(edge);
}

logInBox('To boldly go where no one has gone before.');