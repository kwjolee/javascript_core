/* 6 minutes

PROBLEM
=====
input : array
output : string

rules:
input array has objects as elements
  objects have 1 key "name"
    key has 1 value of some name (string)

output string displays all names in the input array
  separated by comma-space
  except for
    last two names
      separated by space-ampersand-space

EXAMPLE
=====

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `list` with parameter `names`

if no name is given in `names` return empty string

declare variable `namesArr` and init empty array

iterate through every element of `names`
  * element is an object
  add value of element to `namesArr`
end iteration

if only one name in `namesArr`
  return the name
if two names in `namesArr`
  return the names separated by " & "
if more than two names in `namesArr`
  return first through second to last names separated by ", "
    and the second to last and last name separated by " & "
*/

function list(names) {
  if (names.length === 0) return '';
  let namesArr = [];
  for (let obj of names) {
    namesArr.push(Object.values(obj)[0]);
  }

  if (namesArr.length === 1) return namesArr[0];
  else if (namesArr.length === 2) return namesArr[0] + " & " + namesArr[1];
  else {
    let initName = namesArr.slice(0, namesArr.length - 1).join(", ");
    return initName + " & " + namesArr[namesArr.length - 1];
  }
}

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))