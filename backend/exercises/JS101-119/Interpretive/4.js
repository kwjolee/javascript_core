/*
7
* 2space * 2space *
space * space * space * space
2space *** 2space
7star

9
* 3space * 3space *
space * 2space * 2space * space
2space * space * space * 2space
3space *** 3space
9star
*/

function star(num) {
  let midline = Math.ceil(num / 2);
  for (let row = 1; row <= num; row += 1) {
    let fromMid = Math.abs(row - midline);
    if (fromMid === 0) console.log(`${"*".repeat(num)}`);
    else {
      let space1 = midline - fromMid - 1;
      let space2 = (num - (2 * space1) - 3) / 2;
      let space3 = space2;
      console.log(`${" ".repeat(space1)}*${" ".repeat(space2)}*${" ".repeat(space3)}*`);
    }
  }
}

star(9);