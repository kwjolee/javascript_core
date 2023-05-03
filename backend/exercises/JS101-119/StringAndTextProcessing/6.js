function staggeredCase(string) {
  return string
  .split("")
  .reduce((accum, letter, ind) => (ind % 2 === 0) ? accum + letter.toUpperCase() : accum + letter.toLowerCase(),'');
}


console.log(staggeredCase('ignore 77 the 4444 numbers'));