/**
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];

    var arrs = s.split('');
    var firstItem = arrs.shift();
    if (s.length % 2 !== 0) {
        return false;
    }
    while (arrs.length) {
        var secondItem = arrs.shift();
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

var parenthesesObject = {
    '{': '}',
    '(': ')',
    '[': ']',
};

var s = '()';
console.log(isValid(s));

var s = "[";
console.log(isValid(s));