// $ istanbul cover src/simple.js

var a = 1;
var b = 1;
var c = 1;

if ((a + b) > 2) {
  console.warn('more than two');
}
if (true) {
 // Empty
}
if (true) {
  // Empty
}

// for (var i = 0; i < 3; i++) {
//
// }

function func() {
  console.warn('this is function');
}

console.warn('c', c);
console.warn('func', func);
// func();
