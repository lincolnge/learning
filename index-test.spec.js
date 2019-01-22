var testFunc = require('./index-test.js');
var { add, minus } = testFunc;
var expect = require('chai').expect;

describe('加法函数的测试', function() {
  it('1 加 1 应该等于 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });

  it('1 - 1 = 0', function() {
    expect(minus(1, 1)).to.be.equal(0);
  });
});