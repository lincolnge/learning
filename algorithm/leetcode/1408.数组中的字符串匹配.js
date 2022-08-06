/*
 * @lc app=leetcode.cn id=1408 lang=javascript
 *
 * [1408] 数组中的字符串匹配
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
const stringMatching = function (words) {
  const res = new Set();
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      // if (words[i] === words[j]) {
      //   throw new Error(`expected variables words[${i}]:'${words[i]}' and words[${j}]:'${words[i]}' to have different values`);
      // }
      if (words[i].includes(words[j])) {
        res.add(words[j]);
        break;
      }
      if (words[j].includes(words[i])) {
        res.add(words[i]);
        break;
      }
    }
  }
  return [...res];
};
// @lc code=end
