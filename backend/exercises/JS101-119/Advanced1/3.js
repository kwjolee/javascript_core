function transpose(matrix) {
  let transposed = [];
  let matSizex = matrix.length;
  let matSizey = matrix[0].length;

  for (let ind = 0; ind < matSizey; ind += 1) {
    transposed.push([]);
  }

  for (let indx = 0; indx < matSizex; indx += 1) {
    for (let indy = 0; indy < matSizey; indy += 1) {
      transposed[indy][indx] = matrix[indx][indy];
    }
  }

  return transposed;
}

const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

let newMatrix = transpose(matrix);
console.log(newMatrix);
console.log(matrix);

console.log(transpose([[1, 2, 3, 4]]));
console.log(transpose([[1], [2], [3], [4]]));
console.log(transpose([[1]]));
console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));