/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var prefix = strs[0];

    var strIndex = 0;
    var res;
    while(strIndex < strs.length) {
        res = strs[strIndex].match('^' + prefix);
        if (!res) {
            prefix = prefix.slice(0, -1);
        } else {
            strIndex++;
        }
    }
    return (res && res[0]) || '';
};

var arr = ["flower","flow","flight"];
console.log(arr, longestCommonPrefix(arr), 'fl');
arr = ["dog","racecar","car"];
console.log(arr, longestCommonPrefix(arr), '');
arr = ["flower","flow","flight"];
console.log(arr, longestCommonPrefix(arr), 'fl');
arr = ["flower"];
console.log(arr, longestCommonPrefix(arr), 'flower');