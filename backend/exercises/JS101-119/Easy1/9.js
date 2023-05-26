/*
input : year
output : boolean - true if year is leap year

rules:
if year is 1752 or before, year is leap year if divisible by 4
otherwise, same as before
*/

function isLeapYear(year) {
  let result;
  if (year <= 1752) {
    result = year % 4 === 0;
  } else if (year % 400 === 0) {
    result = true;
  } else if (year % 100 === 0) {
    result = false;
  } else {
    result = year % 4 === 0;
  }
  return result;
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true