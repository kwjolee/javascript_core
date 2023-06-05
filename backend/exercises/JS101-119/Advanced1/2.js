function transpose(matrix) {
  let transposed = [];
  let matSize = matrix[0].length;

  for (let ind = 0; ind < matSize; ind += 1) {
    transposed.push([]);
  }

  for (let indx = 0; indx < matSize; indx += 1) {
    for (let indy = 0; indy < matSize; indy += 1) {
      transposed[indy][indx] = matrix[indx][indy];
    }
  }

  return transposed;
}

let matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

console.log(transpose(matrix));
console.log(matrix);

console.log('=====');

function transposeInPlace(matrix) {
  let matSize = matrix[0].length;
  for (let indx = 0; indx < matSize; indx += 1) {
    for (let indy = indx + 1; indy < matSize; indy += 1) {
      [matrix[indx][indy], matrix[indy][indx]] = [matrix[indy][indx], matrix[indx][indy]];
    }
  }

  return matrix;
}

let matrix2 = [
  [1, 5, 8, 9],
  [4, 7, 2, 8],
  [3, 9, 6, 7],
  [11, 12, 13, 14]
];

console.log(transposeInPlace(matrix2));
console.log(matrix2);