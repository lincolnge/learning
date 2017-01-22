var http = require('http');
var koa = require('koa');
var app = koa();
http.createServer(app.callback()).listen(3000);
