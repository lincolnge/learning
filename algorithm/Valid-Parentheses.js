/**
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const stack = [];

  const arrs = s.split('');
  let firstItem = arrs.shift();
  if (s.length % 2 !== 0) {
    return false;
  }
  while (arrs.length) {
    const secondItem = arrs.shift();
    if (parenthesesObject[firstItem] === secondItem) {
      firstItem = stack.pop();
      continue;
    }
    stack.push(firstItem);
    firstItem = secondItem;
  }
  if (stack.length) {
    return false;
  }
  return true;
};

const parenthesesObject = {
  '{': '}',
  '(': ')',
  '[': ']',
};

let s = '()';
console.log(isValid(s));

s = '[';
console.log(isValid(s));
