/**
 * https://leetcode.cn/problems/defanging-an-ip-address/
 * @param {string} address
 * @return {string}
 */
// var defangIPaddr = function(address) {
//   var arr = address.split('.');
//   return arr.join('[.]');
// };


var defangIPaddr = function(address) {
  return address.replaceAll('.', '[.]');
};
