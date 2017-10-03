// ╰─$ istanbul cover _mocha test/test.sqrt.spec.js

var assert = require('assert');
var src = require('../src');
var My = src.My;
// var My = require('../src/sqrt.js');
// var sim = require('../src/simple.js')

describe('assert sqrt', function() {

  it('4的平方根应该等于', function() {
    assert.equal(My.sqrt(4), 2);
  });

  it('参数为负值时应该报错', function() {
    assert.doesNotThrow(
      function() {
        My.sqrt(3);
      },
      '参数为负值时应该报错'
    );
    assert.throws(
      function() {
        My.sqrt(-1);
      },
      function(err) {
        // console.info('err', err);
        if ((err instanceof Error) && /负值没有平方根/.test(err)) {
          return true;
        }
      },
      '参数为负值时应该报错'
    );
  });
});
