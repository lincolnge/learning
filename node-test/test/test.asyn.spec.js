// $ mocha test/test.asyn.spec.js

var fs = require('fs');
var muk = require('muk');
var isConsole = false;
// isConsole = true;

/* start debug output */
var debug = console.warn;
if (!isConsole) {
  debug = function() {};
}
/* end debug */

// 测试 fs readFile 是否能正常运行
describe('Read File, fs.readFile should be ok', function() {
  it('should without error', function(done) {
    fs.readFile('src/index.js', 'utf-8', function (err, data) {
      debug('data0-0', data);
      if (!err) {
        done();
      }
    });
  });
});

describe.skip('Set time out', function() {
  it('asyn test', function(done) {
    setTimeout(done, 1990);
  });
  it('asyn test', function(done) {
    setTimeout(done, 1000);
    // function done2 () {
    //   debug('done2')
    //   setTimeout(done, 980);
    // }
    // setTimeout(done2, 4000);
    // $ mocha test/test.asyn.spec.js -t 5000
  });

  // var assert = require('assert');
  // it('asyn test2', function() {
  //   assert.throws(
  //     function() {
  //       return new Error();
  //     },
  //     function(err) {
  //       console.info('err', err);
  //       return true;
  //     },
  //     'Timeout of 2000ms exceeded!!!'
  //   );
  // });
});

// 测试 mock fs readFile 是否能正常运行
describe('Read File, mock', function() {
  beforeEach(function() {
    // muk(fs, 'readFileSync', function(path, encoding) {
    //   throw new Error('mock readFileSync error');
    // });

    muk(fs, 'readFile', function(path, encoding, callback) {
      process.nextTick(function () {
        callback(new Error('mock readFile error'));
      });
    });
    debug('check fs.readFile isMocked', muk.isMocked(fs, 'readFile'));
  });

  it('should read file error', function(done) {
    fs.readFile('src/index.js', 'utf-8', function (err, data) {
      debug('err info', err);
      debug('data output', data);
      if ((err instanceof Error) && /mock readFile error/.test(err)) {
        done();
      }
    });
  });

  afterEach(function() {
    // Restore all mocked methods after tests.
    // 取消 mock。
    muk.restore();

    // fs.readFile('src/index.js', 'utf-8', function (err, data) {
    //   debug('data x xxxx', data, 'end xxxx');
    // });
  });
});

// 测试外面的 fs readFile 是否能正常运行
// describe('Read File, fs.readFile should be ok', function() {
//   it('should without error', function(done) {
//     fs.readFile('src/index.js', 'utf-8', function (err, data) {
//       debug('data0-1', data);
//       if (!err) {
//         done();
//       }
//     });
//   });
// });
