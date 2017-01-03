var sim = require('./simple.js');
var My = require('./sqrt');
var src = {
  // sim,
  My: My
};

// privacy function
var limit = function (num) { return num < 0 ? 0 : num * 2; };

console.warn('sim', sim);
console.warn('limit', limit);

module.exports = src;
