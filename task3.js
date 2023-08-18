const arr = [["", "aaa", "abb"], ["", "mama"], ["ann"]];
let str = "ann";
let res = false;
debugger;
const wordInTheCrossword = (arr, str) => {
  for (let i = 0; i < arr.length; i++) {
    res = arr[i].some((el) => {
      return el === str;
    });
    if (res) {
      break;
    }
  }
  return res;
};
const result = wordInTheCrossword(arr, str);
console.log(result);

// const arr = [
//   ["a", "n", ""],
//   ["", "mama", "", "mmm"],
//   ["a", "n"],
// ];
// let str = "ann";

// const wordInTheCrossword = (arr, str) => {
//   let res = false;
//   for (let i = 0; i < arr.length; i++) {
//     let a = arr[i].reduce((acc = "", el) => acc + el);

//     res = a === str;

//     if (res) {
//       break;
//     }
//   }
//   return res;
// };
// const result = wordInTheCrossword(arr, str);
// console.log(result);
