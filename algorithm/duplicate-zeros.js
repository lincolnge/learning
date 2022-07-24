/**
 * https://leetcode.cn/problems/duplicate-zeros/
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
// var duplicateZeros = function(arr) {
//   var len = arr.length;
//   for (var i = 0; i < arr.length; i++) {
//       if (arr[i] === 0) {
//           arr.splice(i, 0, 0);
//           i++;
//       }
//   }
//   arr.length = len;
//   return arr;
// };

const duplicateZeros = function (arr) {
  let count0 = 0;
  const len = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) count0++;
  }
  for (let j = arr.length - 1; j >= 0; j--) {
    if (count0 === 0) break;
    if (arr[j] === 0) {
      arr[j + count0] = 0;
      count0--;
    }
    arr[j + count0] = arr[j];
  }
  arr.length = len;
};

duplicateZeros([0, 0, 1, 0, 0, 0]);
