/**
 * n * n matrix
 */

const findMatrix = function (matrix, num) {
  let found = false;
  const rows = matrix.length;
  const columns = rows;
  if (!rows) {
    return 0;
  }
  let row = 0;
  let col = columns - 1;
  let test = 0;
  while (row < rows && col >= 0 && test < 100) {
    test++;
    if (matrix[row][col] === num) {
      found = true;
      break;
    } else if (matrix[row][col] > num) {
      col--;
    } else {
      row++;
    }
  }
  return found;
};

const matrix = [
  [1, 5, 9],
  [10, 11, 13],
  [12, 13, 15],
];

findMatrix(matrix, 5);
