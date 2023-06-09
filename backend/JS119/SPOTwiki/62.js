/* 6 minutes

PROBLEM
=====
input : array
output : string

rules:
input array may contain any number of strings (names)
  can be an empty array
output string is formatted depending on number of names given
  0: no one likes this
  1: ${name} likes this
  2: ${name1} and ${name2} like this
  3: ${name1}, ${name2} and ${name3} like this
  4 or more (N): ${name1}, ${name2} and ${N-2} like this

ALGORITHM
=====
declare function `likes` with parameter `names`

output string is formatted depending on number of names given
  0: no one likes this
  1: ${name} likes this
  2: ${name1} and ${name2} like this
  3: ${name1}, ${name2} and ${name3} like this
  4 or more (N): ${name1}, ${name2} and ${N-2} like this
return the output string
*/

function likes(names) {
  switch (names.length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      let N = names.length - 2;
      return `${names[0]}, ${names[1]} and ${N} others like this`;
  }
}

console.log(likes(["Peter", "Alex", "John", "Mark", "Max"]))