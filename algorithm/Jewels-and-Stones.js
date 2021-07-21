/**
 * https://leetcode-cn.com/problems/jewels-and-stones/
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
// method 1
// var numJewelsInStones = function(J, S) {
//     var SMap = {};
//     var stones = 0;
//     for (var i = 0; i < S.length; i++) {
//         if (!SMap[S[i]]) {
//             SMap[S[i]] = 0
//         }
//         SMap[S[i]] += 1;
//     }
//     for (var i = 0; i < J.length; i++) {
//         if (!SMap[J[i]]) {
//             SMap[J[i]] = 0
//         }
//         stones += SMap[J[i]];
//     }
//     return stones;
// };
// method 2
var numJewelsInStones = function(J, S) {
    let jArr = J.split('');
    let sArr = S.split('');
    return sArr.filter(item => jArr.includes(item)).length;
};

var J;
var S;
J = "aA";
S = "aAAbbbb";
console.log('numJewelsInStones(J, S)', numJewelsInStones(J, S));

J = "z";
S = "ZZ";
console.log('numJewelsInStones(J, S)', numJewelsInStones(J, S));

// TODO: 没做完。。。