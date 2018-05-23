/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  var tmpObj = {};
  for (var i = 0; i < nums.length; i++) {
    tmpObj[target - nums[i]] = i;
    if (tmpObj[nums[i]] !== undefined) {
      return [tmpObj[nums[i]], i];
    }
  }
  return 0;
}

var nums = [2, 7, 11, 15, 1, 5, 8, 9, 3, 6];
var target = 12;
var N = 2;

console.log(twoSum(nums, target));

// TODO: to be continue...
var nSum = function(nums, N, target) {
  var result = [];
  for (var i = 0; i < nums.length; i++) {
    var firstValue = nums[i];
    nSumV(nums, N, target, firstValue, result);
    if (result.length === N) {
      break;
    }
  }
  return result;
}

var nSumV = function(nums, N, target, firstValue, result) {
  var pos = nums.indexOf(firstValue);
  target = target - firstValue;
  console.log('pos', pos, 'target', target);
  if (N === 1) {
    return pos;
  }
  result = [pos, nSumV(nums, N - 1, target, result)]
  return result;
}

console.log('nSum', nSum(nums, N, target));
