const storeLog = console.log;

console.log = console.assert;
console.warn = console.assert;
console.error = console.assert;

// 测试 Decorator
// http://es6.ruanyifeng.com/#docs/decorator
console.warn('hello, decorator!');

function testable(isTestable) {
  return function(target) {
    target.isTestable = isTestable;
  }
}

@testable(true)
class MyTestableClass {}
console.log('MyTestableClass.isTestable', MyTestableClass.isTestable) // true

@testable(false)
class MyClass {}

console.log('MyClass.isTestable', MyClass.isTestable) // true

/*
@decorator
class A {}

// 等同于

class A {}
A = decorator(A) || A;
*/
console.error('end decorator!');
console.log = storeLog;
