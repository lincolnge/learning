/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    const minHeight = Math.min(height[left], height[right]);
    const area = minHeight * (right - left);
    max = Math.max(max, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};
// @lc code=end

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.info(`maxArea(${height})`, maxArea(height));

height = [1, 1];
console.info(`maxArea(${height})`, maxArea(height));
