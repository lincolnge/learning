/**
 * @param {number[]} prices
 * @return {number}
 */
// method 1
const maxProfit = function (prices) {
  let sum = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      sum += prices[i] - prices[i - 1];
    }
  }
  return sum;
};

// Java 代码
// class Solution {
//     public int maxProfit(int[] prices) {
//         int sum = 0;
//         for (int i = 1; i < prices.length; i++) {
//             if (prices[i] > prices[i - 1]) {
//                 sum += prices[i] - prices[i - 1];
//             }
//         }
//         return sum;
//     }
// }

let prices = [];
prices = [7, 1, 5, 3, 6, 4];
console.log('', maxProfit(prices));

prices = [1, 2, 3, 4, 5];
console.log('', maxProfit(prices));

prices = [7, 6, 4, 3, 1];
console.log('', maxProfit(prices));

prices = [1, 2, 8, 8, 10];
console.log('', maxProfit(prices));
