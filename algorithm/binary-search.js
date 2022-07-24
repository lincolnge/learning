/**
 * 二分法
 * https://zh.wikipedia.org/wiki/%E4%BA%8C%E5%88%86%E6%90%9C%E7%B4%A2%E7%AE%97%E6%B3%95
 */

const arr = [];
const key = 397;
const numbers = 1000;

for (let i = 1; i < numbers; i++) {
  arr.push(i);
}

// arr = [1, 2, 9, 397, 399, 400, 1000];

const binarySearch = function (arr, key) {
  const start = 0;
  const end = arr.length;
  return binarySearchInner(arr, start, end, key);
};

const binarySearchInner = function (arr, start, end, key) {
  if (start > end) {
    return -1;
  }

  const mid = parseInt((start + end) / 2);
  if (arr[mid] > key) {
    return binarySearchInner(arr, start, mid - 1, key);
  }
  if (arr[mid] < key) {
    return binarySearchInner(arr, mid + 1, end, key);
  }
  return mid;
};

console.log('binarySearch', binarySearch(arr, key));
