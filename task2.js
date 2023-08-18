const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, 10],
];
const minimumOfSubArr = (arr) => {
  return arr.map((x) => Math.min(...x));
};
const res = minimumOfSubArr(arr);
console.log(res);
