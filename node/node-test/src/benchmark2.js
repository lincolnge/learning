// 基准测试
// $ node src/benchmark2.js

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();
var arr = [0, 1, 2, 3, 5, 6];

function callback(item) {
  return item;
}

suite.add('nativeMap', function() {
  return arr.map(callback);
}).add('customMap', function() {
  var ret = [];
  for (var i = 0; i < arr.length; i++) {
    ret.push(callback(arr[i]));
  }
  return ret;
}).on('cycle', function(event) {
  console.warn(String(event.target));
}).on('complete', function() {
  console.warn('Fastest is ' + this.filter('fastest').map('name'));
  // console.warn('Faster is ' + JSON.stringify(this.filter('fastest')));
}).run();


// // add tests
// suite.add('RegExp#test', function() {
//   /o/.test('Hello World!');
// })
// .add('String#indexOf', function() {
//   'Hello World!'.indexOf('o') > -1;
// })
// // add listeners
// .on('cycle', function(event) {
//   console.log(String(event.target));
// })
// .on('complete', function() {
//   // console.log('Fastest is ' + this.filter('fastest').map('name'));
//   console.log('Faster is ' + JSON.stringify(this.filter('fastest')));
// })
// // run async
// .run({ 'async': true });
