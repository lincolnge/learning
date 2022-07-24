/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function (nums, target) {
  const tmpObj = {};
  for (let i = 0; i < nums.length; i++) {
    tmpObj[target - nums[i]] = i;
    if (tmpObj[nums[i]] !== undefined) {
      return [tmpObj[nums[i]], i];
    }
  }
  return 0;
};

const nums = [2, 7, 11, 15, 1, 5, 8, 9, 3, 6];
const target = 12;
const N = 2;

console.log(twoSum(nums, target));

// TODO: to be continue...
const nSum = function (nums, N, target) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const firstValue = nums[i];
    nSumV(nums, N, target, firstValue, result);
    if (result.length === N) {
      break;
    }
  }
  return result;
};

const nSumV = function (nums, N, target, firstValue, result) {
  const pos = nums.indexOf(firstValue);
  target = target - firstValue;
  console.log('pos', pos, 'target', target);
  if (N === 1) {
    return pos;
  }
  result = [pos, nSumV(nums, N - 1, target, result)];
  return result;
};

console.log('nSum', nSum(nums, N, target));
