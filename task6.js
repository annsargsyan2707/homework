const matrix = [
  [1, 1, 1, 0],
  [1, 1, 0, 0],
  [0, 1, 0, 0],
  [1, 1, 1, 1],
];
function largestSquareOfNestedMatrix(matrix) {
  const len = matrix.length;
  let size = 0;

  const newMatrix = new Array(len).fill(0).map(() => new Array(len).fill(0));

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (matrix[i][j] === 1) {
        if (i === 0 || j === 0) {
          newMatrix[i][j] = 1;
        } else {
          newMatrix[i][j] =
            Math.min(
              newMatrix[i - 1][j],
              newMatrix[i][j - 1],
              newMatrix[i - 1][j - 1]
            ) + 1;
        }
        size = Math.max(size, newMatrix[i][j]);
      }
    }
  }

  return size;
}

const res = largestSquareOfNestedMatrix(matrix);
console.log(res);
