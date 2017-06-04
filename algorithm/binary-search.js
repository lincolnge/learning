/**
 * 二分法
 * https://zh.wikipedia.org/wiki/%E4%BA%8C%E5%88%86%E6%90%9C%E7%B4%A2%E7%AE%97%E6%B3%95
 */

var arr = [];
var key = 397;
var numbers = 1000;

for (var i = 1; i < numbers; i++) {
  arr.push(i);
}

// arr = [1, 2, 9, 397, 399, 400, 1000];

var binarySearch = function(arr, key) {
  var start = 0;
  var end = arr.length;
  return binary_search(arr, start, end, key);
};

var binary_search = function(arr, start, end, key) {
  if (start > end) {
    return -1;
  }

  var mid = parseInt((start + end) / 2);
  if (arr[mid] > key) {
    return binary_search(arr, start, mid - 1, key);
  }
  if (arr[mid] < key) {
    return binary_search(arr, mid + 1, end, key);
  }
  return mid;
}

console.log('binarySearch', binarySearch(arr, key));
