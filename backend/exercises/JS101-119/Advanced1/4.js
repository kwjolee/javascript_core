function rotate90(matrix) {
  let rotated = [];
  let matSizeX = matrix.length;
  let matSizeY = matrix[0].length;

  for (let ind = 0; ind < matSizeY; ind += 1) {
    rotated.push([]);
  }

  for (let indx = 0; indx < matSizeX; indx += 1) {
    for (let indy = 0; indy < matSizeY; indy += 1) {
      rotated[indy][indx] = matrix[indx][indy];
    }
  }

  for (let subArr of rotated) {
    subArr.reverse();
  }

  return rotated;
}

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]