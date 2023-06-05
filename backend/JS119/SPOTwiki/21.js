// 3 min no PEDAC

function mineLocation(field) {
  const FIELD_SIZE = field.length;

  for (let row = 0; row < FIELD_SIZE; row += 1) {
    for (let col = 0; col < FIELD_SIZE; col += 1) {
      if (field[row][col] === 1) return [row, col];
    }
  }
}

let field = [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ];

console.log(mineLocation(field));