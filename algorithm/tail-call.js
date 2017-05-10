/**
 * 尾递归调用优化。
 * http://es6.ruanyifeng.com/#docs/function
 */

// sample 1
// function factorial(n) {
//   if (n === 1) return 1;
//   return n * factorial(n - 1);
// }

function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

// factorial(5, 1) // 120

// sample 2
// function Fibonacci(n) {
//   if (n <= 1) return 1;
//   return Fibonacci(n - 1) + Fibonacci(n - 2);
// }
//
function Fibonacci(n, x0 = 1, x1 = 1) {
  if (n <= 1) return x1;
  return Fibonacci(n - 1, x1, x0 + x1);
}

console.log(Fibonacci(1));
console.log('Fibonacci(2)', Fibonacci(2));
console.log(Fibonacci(3));
console.log(Fibonacci(4));
console.log(Fibonacci(5));
