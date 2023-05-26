let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

/*
use forEach
output all vowels from strings in arrays
*/

Object.values(obj).forEach(arr => {
  arr.forEach(str => {
    str.split("").forEach(char => {
      if ("aeiouAEIOU".includes(char)) {
        console.log(char);
      }
    });
  });
});