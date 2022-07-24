/**
 * https://leetcode.cn/problems/defanging-an-ip-address/
 * @param {string} address
 * @return {string}
 */
// var defangIPaddr = function(address) {
//   var arr = address.split('.');
//   return arr.join('[.]');
// };

const defangIPaddr = function (address) {
  return address.replaceAll('.', '[.]');
};
