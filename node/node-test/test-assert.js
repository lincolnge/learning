// http://javascript.ruanyifeng.com/nodejs/assert.html
/*
 * node test-assert.js
 *
 * ok(): assert(value, message) || assert.ok(value, message)
 * equal(): assert.equal(actual, expected, [message]),（==）
 * notEqual()
 * deepEqual()
 * notDeepEqual()
 * strictEqual()
 * notStrictEqual()
 * throws(): assert.throws(block, [error], [message])
 * doesNotThrow(): assert.doesNotThrow(block, [message])
 * ifError(): assert.ifError(value)
 */

var assert = require('assert');

let func1 = 'equal';
// func1 = 'strictEqual';

let func2 = 'deepEqual';
// func2 = 'strictEqual';

assert(Math.max(1, 100) === 100, 'good');
assert[func1](Math.max(1, 100), 100, 'good');
assert[func1](Math.max(1, 100), '100', 'good');
assert[func2]([1, 2, 3, 4, 5], [1, 2, 3, 4, 5], 'good');
assert[func2]({a: [1, 2, 3, 4, 5]}, {a: [1, 2, 3, 4, 5]}, 'good');
// assert.notEqual(Math.max(1, 100), 100, 'good'); // AssertionError

// assert.strictEqual(1, '1', '预期严格相等'); // AssertionError
assert.notStrictEqual(1, true, '预期严格不相等');


assert.throws(
  function() {
    throw new Error("Wrong value");
  },
  /value/,
  '不符合预期的错误类型'
);

assert.throws(
  function() {
    throw new Error("Wrong value2");
  },
  function(err) {
    // console.error('Error', err);
    // return false;
    if ( (err instanceof Error) && /value/.test(err) ) {
      return true;
    }
  },
  '不符合预期的错误类型'
);

// 用法
assert.doesNotThrow(
  function() {
    console.log("Nothing to see here");
  },
  '预期不抛出错误'
);


// 用法
function sayHello(name, callback) {
  var error = false;
  // error = true;
  var str   = "Hello "+name;
  callback(error, str);
}

// use the function
sayHello('World', function(err, value) {
  assert.ifError(err);
  // ...
});

assert.ifError(0);
// assert.ifError(1); // Error


/*
 * 该方法共有四个参数，但是不管参数是什么值，它总是抛出一个错误。
 */
// assert.fail(21, 42, 'Test Failed', '###'); // AssertionError
// assert.fail(21, 21, 'Test Failed', '###'); // AssertionError
// assert.fail(21, 42, undefined, '###'); // AssertionError
// assert.fail(1, 1, undefined, '=='); // AssertionError
