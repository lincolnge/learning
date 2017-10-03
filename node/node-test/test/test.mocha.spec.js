// http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('User', function() {
  describe('#save()', function() {
    it('should save without error', function(done) {
      done();
      // var user = new User('Luna');
      // user.save(done);
    });
  });
});

beforeEach(function() {
  // runs before each test in this block
  console.warn('===== all beforeEach 影响全局 =====');
});

afterEach(function() {
  // runs before each test in this block
  console.warn('===== all afterEach 影响全局 =====');
});

describe('hooks', function() {

  before(function() {
    // runs before all tests in this block
    console.warn('before');
  });

  after(function() {
    // runs after all tests in this block
    console.warn('after');
  });

  beforeEach(function() {
    // runs before each test in this block
    console.warn('beforeEach');
  });

  afterEach(function() {
    // runs after each test in this block
    console.warn('afterEach');
  });

  // test cases
  describe('#test hooks', function() {
    it('should without error', function(done) {
      done();
    });
  });
});

// describe('#find()', function() {
//   it('respond with matching records', function() {
//     return db.find({ type: 'User' }).should.eventually.have.length(3);
//   });
// });
