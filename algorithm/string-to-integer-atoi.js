/**
 * @param {string} str
 * @return {number}
 * https://leetcode.com/problems/string-to-integer-atoi/
 */
const myAtoi = function (str) {
  const result = parseInt(str, 10);
  if (isNaN(result)) {
    return 0;
  }
  if (result >= Math.pow(2, 31)) {
    return Math.pow(2, 31) - 1;
  } else if (result < -Math.pow(2, 31)) {
    return -Math.pow(2, 31);
  }
  return result;
};

console.log(myAtoi('42'), 42);
console.log(myAtoi('+-42'), 0);
console.log(myAtoi('     -42'), -42);
console.log(myAtoi('4193 with words'), 4193);
console.log(myAtoi('words and 987'), 0);
console.log(myAtoi('-91283472332'), -2147483648);

/**
 * https://segmentfault.com/a/1190000010571914
 * JavaScript 实现 parseInt()
 */
