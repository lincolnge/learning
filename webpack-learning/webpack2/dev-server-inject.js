var express;
try {
  express = require('express');
} catch (err) {
  if (~err.message.indexOf('Cannot find module')) {
    express = require('webpack-dev-server/node_modules/express');
  } else {
    throw err;
  }
}
var proto = express.application;
var _use = proto.use;

var pageUrlRegExps = [
  '(?!/api/)(?!/backend/)(?!.+\\.\\w+)'
];

function redirectIndexHtml(url) {
  var isIndex;
  if (url === '/') {
    isIndex = true;
  } else {
    for (var i = 0; i < pageUrlRegExps.length; i++) {
      if (new RegExp(`^${pageUrlRegExps[i]}`, 'i').test(url)) {
        isIndex = true;
        break;
      }
    }
  }
  isIndex && console.log('Redirect to "/dist/index.html" from', url);
  return isIndex ? '/dist/index.html' : url;
}

function inject() {
  proto.use = function (middleware) {
    var self = this;
    var newMiddleware = function (req, res, next) {
      if (req.method === 'GET') {
        req.url = redirectIndexHtml(req.url);
      }
      if (req.method) {
        middleware.call(self, req, res, next);
      }
    };
    _use.call(this, newMiddleware);
  };
}

module.exports = inject;
