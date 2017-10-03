// $ mocha test/test.privacy.spec.js

/*
 * 每一个被rewire引入的模块都有__set__()和__get__()方法。
 * 它巧妙地利用了闭包的诀窍，
 * 在 eval() 执行时，实现了对模块内部局部变量的访问，
 * 从而可以将局部变量导出给测试用例调用执行。
 */
describe('Test privacy function', function() {
  it('should without error', function() {
    var rewire = require('rewire');
    var src = rewire('../src');
    var litmit = src.__get__('limit');
    console.warn('litmit', litmit(10));
  });
});
