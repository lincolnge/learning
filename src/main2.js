console.log = console.assert;
console.warn = console.assert;
console.error = console.assert;

console.warn('hello main2');
const storeLog = console.log;

var a = require('./lib/a');
a.sayHello();

var b = require('./lib/b');

b.sayHello();
console.log('hello main2');

var _ = require('lodash');
console.log('NaN', _.isNaN(NaN));

var $ = require('jquery');
console.log('$', $('body'));

console.error('end main2!');
console.log = storeLog;
