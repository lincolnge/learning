/**
 * https://leetcode.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    var array = String(x).split('');
    var length = array.length;
    var left = null;
    var right = null;
    for (left = 0, right = length - 1; left < right; left += 1, right -= 1) {
        if (array[left] !== array[right]) {
            return false;
        }
    }
    return true;
};




// var isPalindrome = function(x) {
//     if (x % 10 === 0 && x !== 0) return false;
//     if (x < 0) {
//         return false;
//     }
//     var newNumber = Number(String(x).split('').reverse().join(''));
//     if (x === newNumber) {
//         return true;
//     }
//     return false;
// };

console.log(isPalindrome(121), true);
console.log(isPalindrome(123), false);
console.log(isPalindrome(-121), false);
console.log(isPalindrome(10), false);
console.log(isPalindrome(0), true);
