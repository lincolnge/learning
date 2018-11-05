/**
 * https://leetcode.com/problems/reverse-integer/
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var result = Math.abs(x);
    symbol = 1;
    var infinityNum = Math.pow(2, 31);
    console.log('infinityNum', infinityNum);
    if (x < 0) {
        symbol = -1;
    }
    var resultValue = Number(String(result).split('').reverse().join('')) * symbol;
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