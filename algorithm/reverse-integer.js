/**
 * https://leetcode.com/problems/reverse-integer/
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  const result = Math.abs(x);
  let resultValue = '';

  let symbol = 1;
  const infinityNum = Math.pow(2, 31);
  if (x < 0) {
    symbol = -1;
  }
  // if (result > infinityNum - 1 || result < -infinityNum) {
  //     return 0;
  // }

  // 方法一
  // var tmpStack = String(result).split('');
  // while (tmpStack.length > 0) {
  //     resultValue += String(tmpStack.pop());
  // }
  // resultValue = Number(resultValue) * symbol;

  // 方法二
  // resultValue = Number(String(result).split('').reverse().join('')) * symbol;

  // 方法三
  const array = String(result).split('');
  const length = array.length;
  let left = null;
  let right = null;
  for (left = 0, right = length - 1; left < right; left += 1, right -= 1) {
    const temporary = array[left];
    array[left] = array[right];
    array[right] = temporary;
  }
  resultValue = Number(array.join('')) * symbol;

  if (resultValue > infinityNum - 1 || resultValue < -infinityNum) {
    resultValue = 0;
  }
  return resultValue;
};

// console.assert(reverse(123), 321);
// console.assert(reverse(-123), -321);
// console.assert(reverse(120), 21);

console.log(reverse(123), 321);
console.log(reverse(-123), -321);
console.log(reverse(120), 21);
console.log(1534236469, reverse(1534236469));
