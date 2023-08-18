const matrix = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];
const matrix1 = [];
for (let i = 0; i < matrix.length; i++) {
  let arr1 = [];
  for (let j = 0; j < matrix[i].length; j++) {
    arr1.push(matrix[j][i]);
  }
  matrix1.push(arr1);
}
console.log(matrix1);
