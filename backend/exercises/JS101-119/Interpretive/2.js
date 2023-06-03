/* 13 minutes

PROBLEM
=====
input : number : odd integer
output : display diamond according to rules

rules:
input is an odd integer
display a 4 pointed diamond in an nxn grid where n is the input integer
use * to indicate the diamond
use whitespace to indicate the not diamond

EXAMPLE
=====
1 logs
*

3 logs
 * 
***
 * 

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `diamond` with parameter `n`
every row has at least one *
determine how many whitespaces are needed on each end
determine how many * needed on each row

first line always has one * and floor(n/2) whitespaces on each end
next line has 2 more * and 1 fewer whitespace on each end
line ceil(n/2) has n *s
then reverse

*/

function solidDiamond(n) {
  let midline = Math.ceil(n / 2);
  for (let row = 1; row <= n; row += 1) {
    let spaces = Math.abs(row - midline);
    let stars = n - (2 * spaces);
    console.log(`${" ".repeat(spaces)}${"*".repeat(stars)}`);
  }
}

function hollowDiamond(n) {
  let midline = Math.ceil(n / 2);
  for (let row = 1; row <= n; row += 1) {
    let spaces = Math.abs(row - midline);
    let stars = n - (2 * spaces);
    if (row === 1 || row === n) {
      console.log(`${" ".repeat(spaces)}*`);
    } else {
      console.log(`${" ".repeat(spaces)}*${" ".repeat(stars - 2)}*`);
    }
  }
}

// solidDiamond(9);
hollowDiamond(9);