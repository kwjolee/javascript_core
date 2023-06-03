/* 7 min -- did not know how to use Date constructor

PROBLEM
=====
input : number (representing the year)
output : number (how many friday the 13ths are there)

rules : years is greater than 1752 (modern calendar)

EXAMPLE
=====
1986 -> 1
2015 -> 3
2017 -> 2

DATA STRUCTURE
=====
arrays?

general idea:
=====
determine if given year is a leap year


ALGORITHM
=====

*/

function fridayThe13ths(year) {
  let thirteenths = [];

  for (let month = 0; month < 12; month += 1) {
    thirteenths.push(new Date(year, month, 13));
  }

  return thirteenths.reduce((count, day) => {
    return day.getDay() === 5 ? (count + 1) : count;
  }, 0);
}

console.log(fridayThe13ths(2022));