// const arr = [
//   [1, 2, 3],
//   [4, 5],
//   [6, 7, 8],
// ];
// const indexOfLargestSumSubArr1 = (arr) => {
//   let newArr = arr.map((x) => {
//     return x.reduce((acc, val) => {
//       return (acc += val);
//     }, 0);
//   });

//   return newArr;
// };
// const maxNumber = indexOfLargestSumSubArr1(arr);
// const res = maxNumber.indexOf(Math.max(...maxNumber));

// console.log(res)

const matrix = [
  [1, 2, 300],
  [4, 50],
  [6, 7, 8],
];
const indexOfLargestSumSubArr = (matrix) => {
  let max = -Infinity;
  let index1 = -1;
  let res1;
  matrix.forEach((x, index) => {
    x.reduce((acc = 0, val) => {
      res1 = acc + val;
      return res1;
    });
    if (res1 > max) {
      max = res1;
      index1 = index;
    }
  });
  return index1;
};
const ans = indexOfLargestSumSubArr(matrix);

console.log(ans);
