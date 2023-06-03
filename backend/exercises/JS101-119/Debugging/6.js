function isValidName(name) {
  return (/^[a-z]+ [a-z]+$/i).test(name);
}

console.log(isValidName('dennis sd3th'))